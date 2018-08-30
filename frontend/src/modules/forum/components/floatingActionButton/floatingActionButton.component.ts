import {Component, Input} from '@angular/core';


@Component({
  selector: 'floating-action-button',
  templateUrl: './floatingActionButton.component.html',
  styleUrls: ['./floatingActionButton.component.scss']
})
export class FloatingActionButtonComponent {
  @Input() icon: string;
  @Input() color: string;
  @Input() tooltip: string;
}
