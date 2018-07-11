import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NewsRecord} from '../schemas/news.record.schema';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsApiService {

  private url: string = '/api/getNews';
  constructor(private http: HttpClient) { }

  searchByTerm(term: string, from: number):Observable<NewsRecord[]>{
    return this.http.get<NewsRecord[]>(this.url + '?q=' + term + '&from=' + from);
  }
}
