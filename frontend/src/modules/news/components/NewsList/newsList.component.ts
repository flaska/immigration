import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NewsRecord} from '../../schemas/news.record.schema';
import {NewsApiService} from '../../services/news.api.service';

@Component({
  selector: 'news-list',
  templateUrl: './newsList.component.html',
  providers: [NewsApiService]
})
export class NewsListComponent{
  @Input()  newsItems: NewsRecord[];
  @Output() fetchMore: EventEmitter<null> = new EventEmitter<null>();
}

