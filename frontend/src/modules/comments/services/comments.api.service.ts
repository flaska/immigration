import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {retry} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {NewsComment} from '../schemas/comment.schema';

@Injectable()
export class CommentsApiService {

  constructor(private http: HttpClient) {
  }

  private getCommentsUrl: string = '/api/comments/getComments?articleId=';
  private postCommentUrl: string = '/api/comments/postComment';

  getComments(articleId: string): Observable<NewsComment[]>{
    return this.http.get<NewsComment[]>(this.getCommentsUrl + articleId).pipe(retry(3));
  }

  urlToArticleId(url: string): string{
    return url.replace(/[^A-z]/g,"");
  }

  postComment(comment: NewsComment): Observable<any>{
    return this.http.post(this.postCommentUrl, comment);
  }
}
