import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NewsRecord} from '../schemas/news.record.schema';
import {Observable} from 'rxjs';

export class BlockedUrl{
  date: Date;
  url: string;
}

@Injectable({
  providedIn: 'root',
})
export class NewsApiService {

  private getUrl: string = '/api/getNews';
  private blockAddr: string = '/api/blockUrl';
  private blockedFeedsAddr: string = '/api/getBlockedUrls';
  constructor(private http: HttpClient) { }

  searchByTerm(term: string, from: number):Observable<NewsRecord[]>{
    return this.http.get<NewsRecord[]>(this.getUrl + '?q=' + term + '&from=' + from);
  }

  blockUrl(url: string, password: string):Observable<boolean>{
    return this.http.post<boolean>(this.blockAddr, {url: url, password: password});
  }

  getBlockedFeeds():Observable<BlockedUrl[]>{
    return this.http.get<BlockedUrl[]>(this.blockedFeedsAddr);
  }
}
