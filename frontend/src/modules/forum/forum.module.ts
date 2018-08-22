import {CommonModule} from "@angular/common";
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {ThreadListComponent} from './components/threadList/threadList.component';

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
  ],
  exports: [],
  providers: []
})
export class ForumModule { }
