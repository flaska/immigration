import {CommonModule} from "@angular/common";
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {NewsModule} from "../news/news.module";


export let routes: Routes = [

];

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    NewsModule
  ],
  exports: [],
  providers: [Title]
})
export class PageModule { }
