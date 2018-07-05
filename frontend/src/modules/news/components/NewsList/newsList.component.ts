import {Component} from '@angular/core';
import {NewsApiService} from '../../services/news.api.service';
import {NewsRecord} from '../../schemas/news.record.schema';

enum NewsChannel {
  GreenCard = "green card",
  OPT = "OPT",
  H1B = "H1B",
  USCIS = "USCIS",
}

@Component({
  selector: 'news-list',
  templateUrl: './newsList.component.html',
  providers: [NewsApiService]
})
export class NewsListComponent{
  channel: NewsChannel = NewsChannel.GreenCard;
  newsItems: NewsRecord[];
  constructor(private newsApiService: NewsApiService){
    this.fetchNews(NewsChannel.GreenCard);
  }

  fetchNews(channel: NewsChannel){
    this.channel = channel;
    this.newsApiService.searchByTerm(this.channel).subscribe(result=>{
      this.newsItems = result;
    });
  }
}
