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
  private threadListUrl: string = 'api/forum/getThreadList';

  getThreadList():Observable<ForumThread>{
    return this.http.get<ForumThread>(this.serverUrl + this.threadListUrl).pipe(retry(3));
  }

}
