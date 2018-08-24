import {Component, Input} from '@angular/core';


@Component({
  selector: 'forum-breadcrumb',
  templateUrl: './forumBreadcrumb.component.html',
  styleUrls: ['./forumBreadcrumb.component.scss']
})
export class ForumBreadcrumbComponent {
  @Input() path: {title: string, url?: string}[];
}
