import {CommonModule} from "@angular/common";
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {MaterialModule} from '../material/material.module';
import {RouterModule, Routes} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {BlogPostDetailComponent} from './post/blog.post.detail.component';
import {BlogListComponent} from './list/blog.list.component';
import {BlogPostService} from './services/blog.post.service';

export let routes: Routes = [
  { path: 'list', component: BlogListComponent},
  { path: 'post/:id', component: BlogPostDetailComponent},
];

@NgModule({
  declarations: [
    BlogPostDetailComponent,
    BlogListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    RouterModule.forChild(routes),
  ],
  exports: [],
  providers: [Title,  BlogPostService]
})
export class BlogModule { }


