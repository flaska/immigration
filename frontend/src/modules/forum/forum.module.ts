import {CommonModule} from "@angular/common";
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {ThreadListComponent} from './components/threadList/threadList.component';
import {ForumApiService} from './services/forum.api.service';
import {MaterialForumModule} from '../material/material.forum.module';

export let routes: Routes = [
  { path: 'list', component: ThreadListComponent},
];

@NgModule({
  declarations: [
    ThreadListComponent
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
