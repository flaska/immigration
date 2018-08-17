import {Component, Input, OnInit} from '@angular/core';
import {CommentsApiService} from '../../services/comments.api.service';
import {NewsComment} from '../../schemas/comment.schema';

@Component({
  selector: 'comment-list',
  templateUrl: './commentList.component.html',
  styleUrls: ['./commentList.component.scss'],
  providers: [CommentsApiService]
})
export class CommentListComponent implements OnInit{

  @Input () articleId: string;
  comments: NewsComment[];

  constructor(private commentsApi: CommentsApiService){

  }

  ngOnInit() {
    this.commentsApi.getComments('xxx').subscribe(comments=>{this.comments = comments});
  }
}
