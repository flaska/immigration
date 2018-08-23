import {Component, Input} from '@angular/core';
import {ForumPost} from '../../schemas/forum.schemas';


@Component({
  selector: 'forum-post',
  templateUrl: './forumPost.component.html',
  styleUrls: ['./forumPost.component.scss']
})
export class ForumPostComponent {
  @Input() post: ForumPost;
}
