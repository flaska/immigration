import {Inject, Injectable, Optional} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NewsRecord} from '../schemas/news.record.schema';
import {Observable} from 'rxjs';
import {APP_BASE_HREF} from '@angular/common';
import {TransferState, StateKey, makeStateKey} from '@angular/platform-browser';
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
    console.log('origin: ' + origin);
    if (origin) this.serverUrl = origin + this.serverUrl;
    console.log('server url: ' + this.serverUrl)
  }


  private serverUrl = '/';

  private getUrl: string = 'api/getNews';
  private blockAddr: string = 'api/blockUrl';
  private blockedFeedsAddr: string = 'api/getBlockedUrls';


  searchByTerm(term: string, scoring: string, from: number, cb: (error:any, result:NewsRecord[])=>void){

    var cachedState = this.transferState.get(makeStateKey(term+scoring+from), null as NewsRecord[]);
    if (cachedState) return cb(null, cachedState);

    console.log('server querying: ' + this.serverUrl + this.getUrl + '?q=' + term + '&from=' + from + '&scoring=' + scoring);

    this.http.get<NewsRecord[]>(this.serverUrl + this.getUrl + '?q=' + term + '&from=' + from + '&scoring=' + scoring).pipe(retry(3)).subscribe((result)=>{
      console.log('query succsess');
      console.log(result[0]);
      console.log('storing state ' + makeStateKey(term+scoring+from));
      this.transferState.set(makeStateKey(term+scoring+from), result as NewsRecord[]);
      cb(null, result);
    },error => {
      console.log('query error');
      console.log(error);
      cb(error, null);
    });

  }

  blockUrl(url: string, password: string):Observable<boolean>{
    return this.http.post<boolean>(this.serverUrl + this.blockAddr, {url: url, password: password});
  }

  getBlockedFeeds():Observable<BlockedUrl[]>{
    return this.http.get<BlockedUrl[]>(this.serverUrl + this.blockedFeedsAddr);
  }
}
