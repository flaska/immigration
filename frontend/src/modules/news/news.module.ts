import {CommonModule} from "@angular/common";
import { NgModule } from '@angular/core';
import {NewsItemComponent} from './components/newsItem/newsItem.component';
import {NewsListComponent} from './components/NewsList/newsList.component';
import {HttpClientModule} from '@angular/common/http';
import {MaterialModule} from '../material/material.module';


@NgModule({
  declarations: [
    NewsListComponent,
    NewsItemComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
  ],
  exports: [NewsListComponent],
  providers: []
})
export class NewsModule { }


