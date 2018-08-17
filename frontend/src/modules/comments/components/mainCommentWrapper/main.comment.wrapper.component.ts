import {Component, Input, OnInit} from '@angular/core';
import {CommentsApiService} from '../../services/comments.api.service';

@Component({selector: 'main-comment-wrapper', templateUrl: './main.comment.wrapper.component.html', styleUrls: ['./main.comment.wrapper.component.scss']})
export class MainCommentWrapperComponent implements OnInit{

  @Input () articleId: string;

  commentsCount: number = 0;
  commentsVisible: boolean = false;

  constructor(private commentApi: CommentsApiService){}

  showHideComments(){
    this.commentsVisible = !this.commentsVisible;
  }

  ngOnInit() {
    this.commentApi.getCommentsCount(this.articleId).subscribe(result=>{
      this.commentsCount = result.count;
    });
  }
}
