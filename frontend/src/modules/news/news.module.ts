import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {Title} from '@angular/platform-browser';

import {NewsItemComponent} from './components/newsItem/newsItem.component';
import {NewsListComponent} from './components/newsList/newsList.component';
import {HttpClientModule} from '@angular/common/http';
import {MainNewsComponent} from './components/mainNews/mainNews.component';
import {ChannelSelectComponent} from './components/channelSelect/channelSelect.component';
import {NewsListWrapperComponent} from './components/newsListWrapper/newsListWrapper.component';
import {MaterialNewsModule} from '../material/material.news.module';
import {CommentsModule} from '../comments/comments.module';
import {UserModule} from '../user/user.module';



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
    MaterialNewsModule,

    CommentsModule
  ],
  exports: [MainNewsComponent, NewsListComponent, NewsItemComponent],
  providers: [Title, UserModule]
})
export class NewsModule { }


