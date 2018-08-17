import {Component, Input, OnInit} from '@angular/core';

@Component({selector: 'main-comment-wrapper', templateUrl: './main.comment.wrapper.component.html', styleUrls: ['./main.comment.wrapper.component.scss']})
export class MainCommentWrapperComponent implements OnInit{

  @Input () articleId: string;

  commentsVisible: boolean = false;

  showHideComments(){
    this.commentsVisible = !this.commentsVisible;
  }

  ngOnInit() {
  }
}
