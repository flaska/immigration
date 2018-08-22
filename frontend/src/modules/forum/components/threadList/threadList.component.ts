import {Component, OnInit} from '@angular/core';
import {ForumApiService} from '../../services/forum.api.service';
import {Observable} from 'rxjs';
import {ForumThread} from '../../schemas/forum.schemas';


@Component({
  selector: 'thread-list',
  templateUrl: './threadList.component.html',
  styleUrls: ['./threadList.component.scss']
})
export class ThreadListComponent implements OnInit{

  threadList: Observable<ForumThread>;

  constructor(private forumService: ForumApiService){

  }

  ngOnInit(){
    this.threadList = this.forumService.getThreadList();
  }

}
