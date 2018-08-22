import {Component, Input} from '@angular/core';


@Component({
  selector: 'info-property',
  templateUrl: './infoProperty.component.html',
  styleUrls: ['./infoProperty.component.scss']
})
export class InfoPropertyComponent {
  @Input() propertyName: string;

}
