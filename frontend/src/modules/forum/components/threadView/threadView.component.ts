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
  posts: ForumPost[];
  thread: ForumThread;

  constructor(private forumThreadService: ForumThreadApiService, private forumPostService: ForumPostApiService, private route: ActivatedRoute){
    this.threadId = this.route.snapshot.paramMap.get('threadId');
    this.forumThreadService.getThreadById(this.threadId).subscribe(thread=>{
      this.thread = thread;
    });
    this.forumPostService.getPostListByThreadId(this.threadId).subscribe(posts=>{
      this.posts = posts;
    })
  }

  ngOnInit(){
  }

  newPostAdded(post){
    this.posts.push(post);
    this.thread.postsCount++;
  }


}
