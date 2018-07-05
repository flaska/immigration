import {Component, Input} from '@angular/core';
import {NewsApiService} from '../../services/news.api.service';
import {NewsRecord} from '../../schemas/news.record.schema';
import {NewsChannel} from '../../services/news.channel.enum';

@Component({
  selector: 'news-list',
  templateUrl: './newsList.component.html',
  providers: [NewsApiService]
})
export class NewsListComponent{
  @Input() channel: NewsChannel;
  newsItems: NewsRecord[];
  constructor(private newsApiService: NewsApiService){
    this.fetchNews(this.channel);
  }

  ngOnChanges() {
    this.fetchNews(this.channel);
  }

  fetchNews(channel: NewsChannel){
    this.newsApiService.searchByTerm(channel).subscribe(result=>{
      this.newsItems = result;
    });
  }
}
