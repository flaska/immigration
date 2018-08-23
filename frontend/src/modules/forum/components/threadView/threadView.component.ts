import {Component, Input, OnInit} from '@angular/core';
import {ForumApiService} from '../../services/forum.api.service';
import {Observable} from 'rxjs';
import {ForumPost, ForumThread} from '../../schemas/forum.schemas';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'thread-view',
  templateUrl: './threadView.component.html',
  styleUrls: ['./threadView.component.scss']
})
export class ThreadViewComponent implements OnInit{

  threadId: string;
  postList: Observable<ForumPost>;
  thread: Observable<ForumThread>;

  constructor(private forumService: ForumApiService, private route: ActivatedRoute){
    this.threadId = this.route.snapshot.paramMap.get('threadId');
    this.thread = this.forumService.getThreadById(this.threadId);
    this.postList = this.forumService.getPostListByThreadId(this.threadId);
  }

  ngOnInit(){

  }

}
