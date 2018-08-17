import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";

import {HttpClientModule} from '@angular/common/http';
import {MaterialCommentsModule} from '../material/comments.material.module';
import {MainCommentWrapperComponent} from './components/mainCommentWrapper/main.comment.wrapper.component';
import {CommentListComponent} from './components/commentList/commentList.component';
import {CommentInputComponent} from './components/commentInput/commentInput.component';


@NgModule({
  declarations: [
    MainCommentWrapperComponent,
    CommentListComponent,
    CommentInputComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialCommentsModule
  ],
  exports: [MainCommentWrapperComponent],
  providers: []
})
export class CommentsModule { }


