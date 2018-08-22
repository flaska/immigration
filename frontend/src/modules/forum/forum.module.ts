import {CommonModule} from "@angular/common";
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {ThreadListComponent} from './components/threadList/threadList.component';
import {ForumApiService} from './services/forum.api.service';
import {MaterialForumModule} from '../material/material.forum.module';
import {ThreadViewComponent} from './components/threadView/threadView.component';

export let routes: Routes = [
  { path: 'list', component: ThreadListComponent},
  { path: 'thread/view/:threadId', component: ThreadViewComponent},
];

@NgModule({
  declarations: [
    ThreadListComponent,
    ThreadViewComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    MaterialForumModule
  ],
  exports: [],
  providers: [ForumApiService]
})
export class ForumModule { }
