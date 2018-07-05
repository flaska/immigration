import {CommonModule} from "@angular/common";
import { NgModule } from '@angular/core';
import {NewsItemComponent} from './components/newsItem/newsItem.component';
import {NewsListComponent} from './components/NewsList/newsList.component';


@NgModule({
  declarations: [
    NewsListComponent,
    NewsItemComponent
  ],
  imports: [
    CommonModule,
  ],
  providers: []
})
export class NewsModule { }
