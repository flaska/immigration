import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({selector: 'channel-select', templateUrl: './channelSelect.component.html', styleUrls: ['./channelSelect.component.css']})
export class ChannelSelectComponent{


  @Input() channel: string;
  @Input() scoring: string;
  @Output() chanelChange: EventEmitter<{channel: string, scoring: string}> = new EventEmitter<{channel: string, scoring: string}>();

  changeChannel(){
    this.chanelChange.emit({channel: this.channel, scoring: this.scoring});
  }

}


