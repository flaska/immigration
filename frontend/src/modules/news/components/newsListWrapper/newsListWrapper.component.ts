import {Component, Input} from '@angular/core';
import {NewsApiService} from '../../services/news.api.service';
import {NewsRecord} from '../../schemas/news.record.schema';
import {NewsChannel, Scoring} from '../../services/news.channel.enum';

@Component({
  selector: 'news-list-wrapper',
  templateUrl: './newsListWrapper.component.html',
  styleUrls: ['./newsListWrapper.component.scss'],
  providers: [NewsApiService]
})
export class NewsListWrapperComponent {
  @Input() channel: NewsChannel;
  @Input() scoring: Scoring;
  newsItems: NewsRecord[];
  showLoading: boolean = false;
  isOffline: boolean = false;

  constructor(private newsApiService: NewsApiService){
  }

  ngOnChanges() {
    this.fetchNews(this.channel, this.scoring, 0);
  }

  fetchNews(channel: NewsChannel, scoring: Scoring, from: number){
    this.showLoading = true;
    this.newsApiService.searchByTerm(channel, scoring, from, (err: any, result: NewsRecord[])=>{
      if (err) {
        this.isOffline = true;
        return;
      }
      if (from===0) this.newsItems = [];
      this.newsItems = this.newsItems.concat(result);
      this.showLoading = false;
      this.isOffline = false;
    });
  }

  fetchMore(){
    var from = this.newsItems.length;
    this.fetchNews(this.channel, this.scoring, from);
  }

}
