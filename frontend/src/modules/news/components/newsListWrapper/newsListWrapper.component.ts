import {Component, Input} from '@angular/core';
import {NewsApiService} from '../../services/news.api.service';
import {NewsRecord} from '../../schemas/news.record.schema';
import {NewsChannel} from '../../services/news.channel.enum';
import {catchError, retry} from "rxjs/operators";
import {Observable} from "rxjs/internal/Observable";

@Component({
  selector: 'news-list-wrapper',
  templateUrl: './newsListWrapper.component.html',
  providers: [NewsApiService]
})
export class NewsListWrapperComponent{
  @Input() channel: NewsChannel;
  newsItems: NewsRecord[];
  showLoading: boolean = false;
  isOffline: boolean = false;
  constructor(private newsApiService: NewsApiService){
  }

  ngOnChanges() {
    this.newsItems = [];
    this.fetchNews(this.channel, 0);
  }

  fetchNews(channel: NewsChannel, from: number){
    this.showLoading = true;
    this.newsApiService.searchByTerm(channel, from).pipe(retry(3)).subscribe(result=>{
      this.newsItems = this.newsItems.concat(result);
      this.showLoading = false;
      this.isOffline = false;
    }, error => {
      this.isOffline = true;
    })
  }

  fetchMore(){
    var from = this.newsItems.length;
    this.fetchNews(this.channel, from);
  }

}
