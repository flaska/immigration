import {Component, Input} from '@angular/core';

@Component({selector: 'news-item', templateUrl: './newsItem.component.html'})
export class NewsItemComponent{
  @Input() newsItem;

}
