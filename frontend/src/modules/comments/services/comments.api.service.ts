import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {retry} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {NewsComment} from '../schemas/comment.schema';

@Injectable({
  providedIn: 'root',
})
export class CommentsApiService {

  constructor(private http: HttpClient) {
  }

  private getCommentsUrl: string = '/api/comments/getComments?articleId=';
  private getCommentsCountUrl: string = '/api/comments/getCommentsCount?articleId=';

  getComments(articleId: string): Observable<NewsComment[]>{
    return this.http.get<NewsComment[]>(this.getCommentsUrl + articleId).pipe(retry(3));
  }

  getCommentsCount(articleId: string): Observable<{count: number}>{
    return this.http.get<{count: number}>(this.getCommentsCountUrl + articleId).pipe(retry(3));
  }

}
