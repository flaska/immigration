import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

import {ForumThread} from '../../schemas/forum.schemas';
import {ForumThreadApiService} from '../../services/forum.thread.api.service';


@Component({
  selector: 'thread-list',
  templateUrl: './threadList.component.html',
  styleUrls: ['./threadList.component.scss']
})
export class ThreadListComponent implements OnInit{

  threadList: Observable<ForumThread>;

  constructor(private forumThreadService: ForumThreadApiService){

  }

  ngOnInit(){
    this.threadList = this.forumThreadService.getThreadList();
  }

}
