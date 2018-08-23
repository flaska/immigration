import {Component, Input} from '@angular/core';


@Component({
  selector: 'forum-bread-crumb',
  templateUrl: './forumBreadcrumb.component.html',
  styleUrls: ['./forumBreadcrumb.component.scss']
})
export class ForumBreadcrumbComponent {
  @Input() path: string[];
}
