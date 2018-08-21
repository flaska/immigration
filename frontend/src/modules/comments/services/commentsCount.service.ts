import {Inject, Injectable, Optional} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {retry} from 'rxjs/operators';
import {makeStateKey, TransferState} from '@angular/platform-browser';
import {APP_BASE_HREF} from '@angular/common';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommentsCountService {

  registeredArticlesForBulk: string[] = [];
  articleCounts = {};
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
        let articleCounts = this.transferState.get(makeStateKey(this.registeredArticlesForBulk.join('')), null as {});
        if (articleCounts) {
          this.articleCounts = articleCounts;
          return;
        }
        this.http.post<{articleId: string, commentsCount: number}[]>(this.serverUrl + this.commentsCountUrl, {articles: this.registeredArticlesForBulk}).pipe(retry(3)).subscribe((result)=>{
          this.resolveObservables(result);
          this.transferState.set(makeStateKey(this.registeredArticlesForBulk.join('')), this.articleCounts as {});
        });
        this.timeoutWaiting = null;
      }, 100);
    }
    return this.observables[articleId];
  }

}
