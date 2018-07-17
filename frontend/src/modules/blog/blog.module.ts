import {CommonModule} from "@angular/common";
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {MaterialModule} from '../material/material.module';
import {RouterModule, Routes} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {BlogPostDetailComponent} from './post/blog.post.detail.component';
import {BlogListComponent} from './list/blog.list.component';
import {MainAdminComponent} from '../admin/components/main/main.admin.component';
import {FormsModule} from '@angular/forms';

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
    // FormsModule,
    RouterModule.forChild(routes),
  ],
  exports: [],
  providers: [Title]
})
export class BlogModule { }


