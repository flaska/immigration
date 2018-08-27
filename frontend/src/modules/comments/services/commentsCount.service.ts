import {Inject, Injectable, Optional} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {retry} from 'rxjs/operators';
import {makeStateKey, TransferState} from '@angular/platform-browser';
import {APP_BASE_HREF} from '@angular/common';
import {Observable} from 'rxjs';

interface commentCountRecord {articleId: string, commentsCount: number}

@Injectable()
export class CommentsCountService {

  registeredArticlesForBulk: string[] = [];
  timeoutWaiting: any;
  observables: object = {};

  constructor(private http: HttpClient, @Optional() @Inject(APP_BASE_HREF) origin: string,  private transferState: TransferState) {
    if (origin) this.serverUrl = origin + this.serverUrl;
  }

  private serverUrl = '/';
  private commentsCountUrl: string = 'api/comments/commentsCount';

  resolveObservables(commentCounts: {articleId: string, commentsCount: number}[]){
    commentCounts.forEach(res=>{
      this.observables[res.articleId].next(res.commentsCount);
    });
  }

  registerArticleId(articleId: string):Observable<number>{
    this.registeredArticlesForBulk.push(articleId);
    this.observables[articleId] =  Observable.create(observer=>{
      this.observables[articleId] = observer;
    });

    if (!this.timeoutWaiting) {
      this.timeoutWaiting = setTimeout(() => {
        let articleCounts = this.transferState.get(makeStateKey(this.registeredArticlesForBulk.join('')), null as commentCountRecord[]);
        if (articleCounts) {
          this.resolveObservables(articleCounts);
          this.timeoutWaiting = null;
          return;
        }
        this.http.post<commentCountRecord[]>(this.serverUrl + this.commentsCountUrl, {articles: this.registeredArticlesForBulk}).pipe(retry(3)).subscribe((result)=>{
          this.resolveObservables(result);
          this.transferState.set(makeStateKey(this.registeredArticlesForBulk.join('')), result as commentCountRecord[]);
        });
        this.timeoutWaiting = null;
      }, 100);
    }
    return this.observables[articleId];
  }

}
