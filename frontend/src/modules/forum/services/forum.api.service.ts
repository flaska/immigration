import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ForumPost, ForumThread} from '../schemas/forum.schemas';
import {map, retry} from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root',
})
export class ForumApiService {

  constructor(private http: HttpClient) {

  }

  private serverUrl = '/';
  private threadUrl: string = 'api/forum/thread';
  private postUrl: string = 'api/forum/post';

  getThreadById(id: string):Observable<ForumThread>{
    return this.http.get<ForumThread>(this.serverUrl + this.threadUrl + '?id=' + id).pipe(retry(3), map(res=>res[0]));
  }

  getThreadList():Observable<ForumThread>{
    return this.http.get<ForumThread>(this.serverUrl + this.threadUrl).pipe(retry(3));
  }

  getPostListByThreadId(threadId: string):Observable<ForumPost>{
    return this.http.get<ForumPost>(this.serverUrl + this.postUrl + '?threadId=' + threadId).pipe(retry(3));
  }

}
