import {Component} from '@angular/core';

@Component({selector: 'main-news', templateUrl: './mainNews.component.html'})
export class MainNewsComponent{
  channel = 'all topics';
  changed(v){
    this.channel = v;
  }
}
