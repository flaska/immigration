import {Component, Input} from '@angular/core';
import {ForumThread} from '../../schemas/forum.schemas';

@Component({
  selector: 'thread-overview',
  templateUrl: './threadOverview.component.html',
  styleUrls: ['./threadOverview.component.scss']
})
export class ThreadOverviewComponent {
  @Input() thread: ForumThread;
}
