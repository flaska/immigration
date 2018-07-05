import {Component, Input} from '@angular/core';

@Component({selector: 'news-item', templateUrl: './newsItem.component.html', styleUrls: ['./newsItem.component.css']})
export class NewsItemComponent{
  @Input() newsItem;

}
