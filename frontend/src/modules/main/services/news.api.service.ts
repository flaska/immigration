import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class NewsApiService {

  private url: string = 'https://news.google.com/news?output=rss&q=';
  constructor(private http: HttpClient) { }

}
