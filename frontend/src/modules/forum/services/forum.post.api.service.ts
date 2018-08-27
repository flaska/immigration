import {Inject, Injectable, Optional} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ForumPost} from '../schemas/forum.schemas';
import {retry} from 'rxjs/internal/operators';
import {APP_BASE_HREF} from '@angular/common';
import {UserService} from '../../user/services/user.service';

@Injectable()
export class ForumPostApiService {

  constructor(private http: HttpClient, private userService: UserService, @Optional() @Inject(APP_BASE_HREF) origin: string) {
    if (origin) this.serverUrl = origin + this.serverUrl;
  }

  private serverUrl = '/';
  private postUrl: string = 'api/forum/post';

  getPostListByThreadId(threadId: string):Observable<ForumPost>{
    return this.http.get<ForumPost>(this.serverUrl + this.postUrl + '?threadId=' + threadId).pipe(retry(3));
  }

  submitPost(post: ForumPost): Observable<ForumPost>{
    return this.http.post<ForumPost>(this.serverUrl + this.postUrl, post).pipe(retry(3));
  }

}
