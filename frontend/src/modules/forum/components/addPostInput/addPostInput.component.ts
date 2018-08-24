import {Component, Input} from '@angular/core';


@Component({
  selector: 'add-post-input',
  templateUrl: './addPostInput.component.html',
  styleUrls: ['./addPostInput.component.scss']
})
export class AddPostInputComponent {
  @Input() threadId: string;
  writingPost: boolean = false;


}

