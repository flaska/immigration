import {Component, Input, OnInit} from '@angular/core';
import {default as DateDiff} from 'date-diff';

@Component({selector: 'news-item', templateUrl: './newsItem.component.html', styleUrls: ['./newsItem.component.css']})
export class NewsItemComponent implements OnInit{
  @Input() newsItem;

  ngOnInit(){
    // console.log();
    var dd = new DateDiff(new Date(), new Date(this.newsItem.date));
    this.newsItem.dateDiff = {days: dd.days(), hours: dd.hours(), minutes: dd.minutes()};
  }
}
