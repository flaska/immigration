import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";

import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';


import { NgxEditorModule } from 'ngx-editor'

import {MaterialForumModule} from '../material/material.forum.module';

import {ThreadListComponent} from './components/threadList/threadList.component';

import {ThreadViewComponent} from './components/threadView/threadView.component';
import {InfoPropertyComponent} from './components/infoProperty/infoProperty.component';
import {ThreadOverviewComponent} from './components/threadOverview/threadOverview.component';
import {ForumPostComponent} from './components/forumBreadcrumb/forumPost.component';
import {ForumBreadcrumbComponent} from './components/forumPost/forumBreadcrumb.component';
import {InfoPropertyListComponent} from './components/infoPropertyList/infoPropertyList.component';
import {FloatingActionButtonComponent} from './components/floatingActionButton/floatingActionButton.component';
import {AddPostInputComponent} from './components/addPostInput/addPostInput.component';
import {FormsModule} from '@angular/forms';
import {ForumThreadApiService} from './services/forum.thread.api.service';
import {ForumPostApiService} from './services/forum.post.api.service';
import {AddThreadInputComponent} from './components/addThreadInput/addThreadInput.component';
import {CloseButtonComponent} from './components/closeButton/closeButton.component';



export let routes: Routes = [
  { path: '', component: ThreadListComponent},
  { path: 'thread/view/:threadId', component: ThreadViewComponent},
];

@NgModule({
  declarations: [
    ThreadListComponent,
    ThreadViewComponent,
    ThreadOverviewComponent,
    ForumPostComponent,
    AddPostInputComponent,
    AddThreadInputComponent,
    ForumBreadcrumbComponent,
    InfoPropertyListComponent,
    InfoPropertyComponent,
    FloatingActionButtonComponent,
    CloseButtonComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    MaterialForumModule,
    FormsModule,
    NgxEditorModule,
  ],
  exports: [],
  providers: [ForumThreadApiService, ForumPostApiService]
})
export class ForumModule { }
