import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({selector: 'channel-select', templateUrl: './channelSelect.component.html'})
export class ChannelSelectComponent{


  @Input() channel: string;
  @Output() chanelChange: EventEmitter<string> = new EventEmitter<string>();

  changeChannel(){
    this.chanelChange.emit(this.channel);
  }

}
