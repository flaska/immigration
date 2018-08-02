import {CommonModule} from "@angular/common";
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {MaterialModule} from '../material/material.module';
import {RouterModule, Routes} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {NewsModule} from "../news/news.module";
import {FormsModule} from '@angular/forms';
import {AdsPage} from './pages/ads/ads.page';

export let routes: Routes = [
  { path: 'ads', component: AdsPage},

];

@NgModule({
  declarations: [
    AdsPage
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    RouterModule.forChild(routes),
    NewsModule
  ],
  exports: [],
  providers: [Title]
})
export class PageModule { }



