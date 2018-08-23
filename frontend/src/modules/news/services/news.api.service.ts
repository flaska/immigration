import {Inject, Injectable, Optional} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NewsRecord} from '../schemas/news.record.schema';
import {APP_BASE_HREF} from '@angular/common';
import {TransferState, makeStateKey} from '@angular/platform-browser';
import {retry} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/internal/operators';

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
  private blockAddr: string = 'api/news/blockUrl';
  private blockedFeedsAddr: string = 'api/news/getBlockedUrls';

  searchByTerm(term: string, scoring: string, from: number): Observable<NewsRecord[]>{

    var cachedState = this.transferState.get(makeStateKey(term+scoring+from), null as NewsRecord[]);
    if (cachedState) return of(cachedState);

    return this.http.get<NewsRecord[]>(this.serverUrl + this.getUrl + '?q=' + term + '&from=' + from + '&scoring=' + scoring).pipe(retry(3), map((result)=>{
      this.transferState.set(makeStateKey(term+scoring+from), result as NewsRecord[]);
      return result;
    }));
  }

  blockUrl(url: string, password: string):Observable<boolean>{
    return this.http.post<boolean>(this.serverUrl + this.blockAddr, {url: url, password: password});
  }

  getBlockedFeeds():Observable<BlockedUrl[]>{
    return this.http.get<BlockedUrl[]>(this.serverUrl + this.blockedFeedsAddr);
  }
}
