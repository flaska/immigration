import {Component, Input, OnInit} from '@angular/core';
import {CommentsApiService} from '../../services/comments.api.service';
import {NewsComment} from '../../schemas/comment.schema';
import {DateDiff} from '../../../shared/services/dateDiff.service';

@Component({
  selector: 'comment-list',
  templateUrl: './commentList.component.html',
  styleUrls: ['./commentList.component.scss'],
  providers: [CommentsApiService]
})
export class CommentListComponent implements OnInit{

  @Input () articleId: string;
  comments: NewsComment[];

  constructor(private commentsApi: CommentsApiService, private dateDiff: DateDiff){

  }

  ngOnInit() {
    this.commentsApi.getComments(this.articleId).subscribe(comments=>{
      this.comments = comments;
      this.comments = this.comments.map(c=>{
        c.dateDiff = this.dateDiff.diff(c.date);
        return c;
      });
    });
  }
}
