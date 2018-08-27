import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ForumPost, ForumThread} from '../../schemas/forum.schemas';
import {ActivatedRoute} from '@angular/router';
import {ForumPostApiService} from '../../services/forum.post.api.service';
import {ForumThreadApiService} from '../../services/forum.thread.api.service';


@Component({
  selector: 'thread-view',
  templateUrl: './threadView.component.html',
  styleUrls: ['./threadView.component.scss']
})
export class ThreadViewComponent implements OnInit{

  threadId: string;
  postList: Observable<ForumPost>;
  thread: Observable<ForumThread>;

  constructor(private forumThreadService: ForumThreadApiService, private forumPostService: ForumPostApiService, private route: ActivatedRoute){
    this.threadId = this.route.snapshot.paramMap.get('threadId');
    this.thread = this.forumThreadService.getThreadById(this.threadId);
    this.postList = this.forumPostService.getPostListByThreadId(this.threadId);
  }

  ngOnInit(){

  }

}
