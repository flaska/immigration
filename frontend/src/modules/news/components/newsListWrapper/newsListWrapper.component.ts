import {Component, Input} from '@angular/core';
import {NewsApiService} from '../../services/news.api.service';
import {NewsRecord} from '../../schemas/news.record.schema';
import {NewsChannel, Scoring} from '../../services/news.channel.enum';
import {catchError, retry} from "rxjs/operators";

@Component({
  selector: 'news-list-wrapper',
  templateUrl: './newsListWrapper.component.html',
  providers: [NewsApiService]
})
export class NewsListWrapperComponent{
  @Input() channel: NewsChannel;
  @Input() scoring: Scoring;
  newsItems: NewsRecord[];
  showLoading: boolean = false;
  isOffline: boolean = false;

  private state;

  constructor(private newsApiService: NewsApiService){
  }

  ngOnChanges() {
    if (this.state!=this.channel+this.scoring) this.newsItems = [];
    this.fetchNews(this.channel, this.scoring, 0);
    this.state = this.channel + this.scoring;
  }

  fetchNews(channel: NewsChannel, scoring: Scoring, from: number){
    this.showLoading = true;
    this.newsApiService.searchByTerm(channel, scoring, from).pipe(retry(3)).subscribe(result=>{
      this.newsItems = this.newsItems.concat(result);
      this.showLoading = false;
      this.isOffline = false;
    }, error => {
      this.isOffline = true;
    })
  }

  fetchMore(){
    var from = this.newsItems.length;
    this.fetchNews(this.channel, this.scoring, from);
  }

}
