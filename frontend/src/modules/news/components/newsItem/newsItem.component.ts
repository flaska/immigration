import {Component, Input, OnInit} from '@angular/core';
import {default as DateDiff} from 'date-diff';
import {NewsRecord} from '../../schemas/news.record.schema';

@Component({selector: 'news-item', templateUrl: './newsItem.component.html', styleUrls: ['./newsItem.component.scss']})
export class NewsItemComponent implements OnInit{
  @Input() newsItem;

  ngOnInit(){
    try {
      var dd = new DateDiff(new Date(), new Date(this.newsItem.date));
      if (dd.hours() <= 1) this.newsItem.dateDiff = 'now';
      if (dd.hours() > 1 && dd.hours() <= 6) this.newsItem.dateDiff = Math.floor(dd.hours()) + ' hours ago';
      if (dd.hours() > 6 && dd.hours() <= 12) this.newsItem.dateDiff = 'today';
      if (dd.hours() > 12 && dd.days() <= 1.5) this.newsItem.dateDiff = 'yesterday';
      if (dd.days() > 1.5) this.newsItem.dateDiff = Math.floor(dd.days()) + ' days ago';
    } catch(e){
      console.log(e);
    }

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
