import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ForumThread} from '../schemas/forum.schemas';
import {retry} from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root',
})
export class ForumApiService {

  constructor(private http: HttpClient) {

  }

  private serverUrl = '/';
  private threadUrl: string = 'api/forum/thread';

  getThreadById(id: string):Observable<ForumThread>{
    return this.http.get<ForumThread>(this.serverUrl + this.threadUrl + '?id=' + id).pipe(retry(3));
  }

  getThreadList():Observable<ForumThread>{
    return this.http.get<ForumThread>(this.serverUrl + this.threadUrl).pipe(retry(3));
  }

}
