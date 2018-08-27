import {Component, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ForumApiService} from '../../services/forum.api.service';


@Component({
  selector: 'add-post-input',
  templateUrl: './addPostInput.component.html',
  styleUrls: ['./addPostInput.component.scss']
})
export class AddPostInputComponent {
  @Input() threadId: string;
  writingPost: boolean = false;
  postContent: string;

  constructor(private forumService: ForumApiService){

  }

  submitPost(){

  }
}

