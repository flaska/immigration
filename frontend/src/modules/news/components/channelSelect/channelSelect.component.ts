import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NewsChannel} from '../../services/news.channel.enum';

@Component({selector: 'channel-select', templateUrl: './channelSelect.component.html'})
export class ChannelSelectComponent{


  @Input() channel: string;
  @Output() chanelChange: EventEmitter<string> = new EventEmitter<string>();

  changeChannel(){
    this.chanelChange.emit(this.channel);
  }

}
