import {Component, Input, OnInit} from '@angular/core';
import {CommentsApiService} from '../../services/comments.api.service';
import {CommentsCountService} from '../../services/commentsCount.service';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'main-comment-wrapper',
  templateUrl: './main.comment.wrapper.component.html',
  styleUrls: ['./main.comment.wrapper.component.scss'],
  providers: [CommentsCountService]
})
export class MainCommentWrapperComponent implements OnInit{

  @Input () url: string;
  private articleId: string;
  commentsCount: Observable<number> = of(0);
  commentsVisible: boolean = false;

  constructor(private commentApi: CommentsApiService, private commentCountService: CommentsCountService){}

  showHideComments(){
    this.commentsVisible = !this.commentsVisible;
  }

  ngOnInit() {
    this.articleId = this.commentApi.urlToArticleId(this.url);
    this.commentsCount = this.commentCountService.registerArticleId(this.articleId);
  }

  reloadComments(){
    this.ngOnInit();
  }
}
