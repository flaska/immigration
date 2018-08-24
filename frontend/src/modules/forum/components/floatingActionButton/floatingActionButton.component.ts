import {Component, Input} from '@angular/core';


@Component({
  selector: 'floating-action-button',
  templateUrl: './floatingActionButton.component.html',
  styleUrls: ['./floatingActionButton.component.scss']
})
export class FloatingActionButtonComponent {
  @Input() action: string;
}
