import {Component, Input, OnInit} from '@angular/core';
import {ForumApiService} from '../../services/forum.api.service';
import {Observable} from 'rxjs';
import {ForumPost, ForumThread} from '../../schemas/forum.schemas';


@Component({
  selector: 'thread-list',
  templateUrl: './threadList.component.html',
  styleUrls: ['./threadList.component.scss']
})
export class ThreadViewComponent implements OnInit{

  @Input() threadId: string;
  postList: Observable<ForumPost>;
  thread: Observable<ForumThread>;

  constructor(private forumService: ForumApiService){

  }

  ngOnInit(){
  }

}
