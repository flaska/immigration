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
  showLoading: boolean = false;
  constructor(private newsApiService: NewsApiService){
  }

  ngOnChanges() {
    this.fetchNews(this.channel);
  }

  fetchNews(channel: NewsChannel){
    this.showLoading = true;
    this.newsApiService.searchByTerm(channel).subscribe(result=>{
      this.newsItems = result;
      this.showLoading = false;
    });
  }
}
