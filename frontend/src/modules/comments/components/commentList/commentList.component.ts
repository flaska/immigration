import {Component, Input, OnInit} from '@angular/core';

@Component({selector: 'comment-list', templateUrl: './commentList.component.html', styleUrls: ['./commentList.component.scss']})
export class CommentListComponent implements OnInit{

  @Input () articleId: string;

  ngOnInit() {
  }
}
