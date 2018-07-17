import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export class BlogPost{
  id: string;
  title: string;
  date: Date;
  body: string;
}

@Injectable()
export class BlogPostService {

  constructor(private http: HttpClient) { }

}
