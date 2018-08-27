import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";

import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';

import {MaterialForumModule} from '../material/material.forum.module';

import {ForumApiService} from './services/forum.api.service';

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
    ForumBreadcrumbComponent,
    InfoPropertyListComponent,
    InfoPropertyComponent,
    FloatingActionButtonComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    MaterialForumModule,
    FormsModule
  ],
  exports: [],
  providers: [ForumApiService]
})
export class ForumModule { }
