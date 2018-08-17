import {Component, Input, OnInit} from '@angular/core';
import {CommentsApiService} from '../../services/comments.api.service';
import {NewsComment} from '../../schemas/comment.schema';
import {DateDiff} from '../../../shared/services/dateDiff.service';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'comment-list',
  templateUrl: './commentList.component.html',
  styleUrls: ['./commentList.component.scss'],
  providers: [CommentsApiService]
})
export class CommentListComponent implements OnInit{

  @Input () articleId: string;
  @Input () set commentsCount(count: number){
    this.ngOnInit();
  }
  comments: NewsComment[];
  userName: string;

  constructor(private commentsApi: CommentsApiService, private dateDiff: DateDiff, private cookieService: CookieService){

  }

  ngOnInit() {
    this.commentsApi.getComments(this.articleId).subscribe(comments=>{
      this.comments = comments;
      this.comments = this.comments.map(c=>{
        c.dateDiff = this.dateDiff.diff(c.date);
        return c;
      });
    });
    this.userName = this.cookieService.get('userName');
  }
}
