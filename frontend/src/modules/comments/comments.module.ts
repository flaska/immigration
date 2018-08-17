import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";

import {HttpClientModule} from '@angular/common/http';
import {MaterialCommentsModule} from '../material/comments.material.module';
import {MainCommentWrapperComponent} from './components/mainCommentWrapper/main.comment.wrapper.component';


@NgModule({
  declarations: [
    MainCommentWrapperComponent
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


