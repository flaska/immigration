import {Inject, Injectable, Optional} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NewsRecord} from '../schemas/news.record.schema';
import {Observable} from 'rxjs';
import {APP_BASE_HREF} from '@angular/common';

export class BlockedUrl{
  date: Date;
  url: string;
}

@Injectable({
  providedIn: 'root',
})
export class NewsApiService {

  constructor(private http: HttpClient, @Optional() @Inject(APP_BASE_HREF) origin: string) {
    console.log('origin: ' + origin);
    if (origin) this.serverUrl = origin + this.serverUrl;
    console.log('server url' + this.serverUrl)
  }

  private serverUrl = '/';

  private getUrl: string = 'api/getNews';
  private blockAddr: string = 'api/blockUrl';
  private blockedFeedsAddr: string = 'api/getBlockedUrls';


  searchByTerm(term: string, scoring: string, from: number):Observable<NewsRecord[]>{
    return this.http.get<NewsRecord[]>(this.serverUrl + this.getUrl + '?q=' + term + '&from=' + from + '&scoring=' + scoring);
  }

  blockUrl(url: string, password: string):Observable<boolean>{
    return this.http.post<boolean>(this.serverUrl + this.blockAddr, {url: url, password: password});
  }

  getBlockedFeeds():Observable<BlockedUrl[]>{
    return this.http.get<BlockedUrl[]>(this.serverUrl + this.blockedFeedsAddr);
  }
}
