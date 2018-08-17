import {Inject, Injectable, Optional} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NewsRecord} from '../schemas/news.record.schema';
import {APP_BASE_HREF} from '@angular/common';
import {TransferState, makeStateKey} from '@angular/platform-browser';
import {retry} from 'rxjs/operators';

export class BlockedUrl{
  date: Date;
  url: string;
}

@Injectable({
  providedIn: 'root',
})
export class NewsApiService {

  constructor(private http: HttpClient, @Optional() @Inject(APP_BASE_HREF) origin: string,  private transferState: TransferState) {
    if (origin) this.serverUrl = origin + this.serverUrl;
  }

  private serverUrl = '/';
  private getUrl: string = 'api/news/getNews';

  searchByTerm(term: string, scoring: string, from: number, cb: (error:any, result:NewsRecord[])=>void){

    var cachedState = this.transferState.get(makeStateKey(term+scoring+from), null as NewsRecord[]);
    if (cachedState) return cb(null, cachedState);

    this.http.get<NewsRecord[]>(this.serverUrl + this.getUrl + '?q=' + term + '&from=' + from + '&scoring=' + scoring).pipe(retry(3)).subscribe((result)=>{
      this.transferState.set(makeStateKey(term+scoring+from), result as NewsRecord[]);
      cb(null, result);
    },error => {
      cb(error, null);
    });
  }
}
