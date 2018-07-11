import {CommonModule} from "@angular/common";
import { NgModule } from '@angular/core';
import {NewsItemComponent} from './components/newsItem/newsItem.component';
import {NewsListComponent} from './components/newsList/newsList.component';
import {HttpClientModule} from '@angular/common/http';
import {MaterialModule} from '../material/material.module';
import {MainNewsComponent} from './components/mainNews/mainNews.component';
import {ChannelSelectComponent} from './components/channelSelect/channelSelect.component';
import {NewsListWrapperComponent} from './components/newsListWrapper/newsListWrapper.component';



@NgModule({
  declarations: [
    MainNewsComponent,
    NewsListComponent,
    NewsListWrapperComponent,
    NewsItemComponent,
    ChannelSelectComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
  ],
  exports: [MainNewsComponent],
  providers: []
})
export class NewsModule { }


