import {Component, Input, OnInit} from '@angular/core';
import {NewsRecord} from '../../schemas/news.record.schema';
import {DateDiff} from '../../../shared/services/dateDiff.service';

@Component({
  selector: 'news-item',
  templateUrl: './newsItem.component.html',
  styleUrls: ['./newsItem.component.scss'],
  providers: [DateDiff]
})
export class NewsItemComponent implements OnInit{
  @Input() newsItem: NewsRecord;

  constructor(private dateDiff: DateDiff){}

  ngOnInit(){
    this.newsItem.dateDiff = this.dateDiff.diff(this.newsItem.date);
  }

  tagManager(newsItem: NewsRecord){
    try {
      var host = new RegExp("https://.+?/","g").exec(newsItem.url)[0];
      window['dataLayer'].push({'event': 'NewsLinkClick', title: newsItem.title, host: host});
    } catch (e) {
      console.log(e);
    }
  }
}
