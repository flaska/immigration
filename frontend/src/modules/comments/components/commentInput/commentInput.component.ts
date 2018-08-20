import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NewsComment} from '../../schemas/comment.schema';
import {CookieService} from 'ngx-cookie-service';
import {CommentsApiService} from '../../services/comments.api.service';
import {MatSnackBar} from '@angular/material';

@Component({selector: 'comment-input', templateUrl: './commentInput.component.html', styleUrls: ['./commentInput.component.scss']})
export class CommentInputComponent implements OnInit{

  @Input () articleId: string;
  @Input () commentsCount: number;
  @Output() commentPosted: EventEmitter<any> = new EventEmitter<any>();

  comment: NewsComment;

  constructor(private commentApiService: CommentsApiService, private cookieService: CookieService, public snackBar: MatSnackBar) { }

  random(size: number): number{
    return Math.floor(Math.random() * size)+1;
  }

  getUserName():string{
    if (this.cookieService.get('userName')) return this.cookieService.get('userName');
    else {
      let animals = ['Fox', 'Cat', 'Zebra', 'Giraffe', 'Elephant'];
      return "Anonymous " + animals[this.random(5)-1];
    }
  }

  postComment(){
    this.comment.articleId = this.articleId;
    this.comment.date = new Date();
    this.commentApiService.postComment(this.comment).subscribe(result=>{
      this.snackBar.open('Comment saved. Yay!', 'Close', {
        duration: 3000,
      });
      this.commentPosted.emit();
    });
    this.cookieService.set('userName', this.comment.userName);
  }

  ngOnInit() {
    this.comment = new NewsComment();
    this.comment.userName =  this.getUserName();
  }
}
