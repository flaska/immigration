import {Component, Input, OnInit} from '@angular/core';

@Component({selector: 'comment-input', templateUrl: './commentInput.component.html', styleUrls: ['./commentInput.component.scss']})
export class CommentInputComponent implements OnInit{

  @Input () articleId: string;

  ngOnInit() {
  }
}
