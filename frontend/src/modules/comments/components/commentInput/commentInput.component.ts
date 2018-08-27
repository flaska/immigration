import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NewsComment} from '../../schemas/comment.schema';
import {CommentsApiService} from '../../services/comments.api.service';
import {MatSnackBar} from '@angular/material';
import {UserService} from '../../../user/services/user.service';

@Component({
  selector: 'comment-input',
  templateUrl: './commentInput.component.html',
  styleUrls: ['./commentInput.component.scss']
})
export class CommentInputComponent implements OnInit{

  @Input () articleId: string;
  @Input () commentsCount: number;
  @Output() commentPosted: EventEmitter<any> = new EventEmitter<any>();

  comment: NewsComment;

  constructor(private commentApiService: CommentsApiService, public snackBar: MatSnackBar, private userService: UserService) { }

  postComment(){
    this.comment.articleId = this.articleId;
    this.comment.date = new Date();
    this.commentApiService.postComment(this.comment).subscribe(result=>{
      this.snackBar.open('Comment saved. Yay!', 'Close', {
        duration: 3000,
      });
      this.commentPosted.emit();
      this.ngOnInit();
    });
    this.userService.setUserName(this.comment.userName);
  }

  ngOnInit() {
    this.comment = new NewsComment();
    this.comment.userName =  this.userService.getUserName();
  }
}
