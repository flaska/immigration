import {Component, Input} from '@angular/core';
import {ForumPostApiService} from '../../services/forum.post.api.service';
import {MatSnackBar} from '@angular/material';
import {ForumPost} from '../../schemas/forum.schemas';
import {UserService} from '../../../user/services/user.service';


@Component({
  selector: 'add-post-input',
  templateUrl: './addPostInput.component.html',
  styleUrls: ['./addPostInput.component.scss']
})
export class AddPostInputComponent {
  @Input() threadId: string;
  writingPost: boolean = false;
  postContent: string;
  userName: string = this.userService.getUserName();

  constructor(private forumPostService: ForumPostApiService, public snackBar: MatSnackBar, private userService: UserService){

  }

  submitPost(){
    let post: ForumPost = new ForumPost({
      content: this.postContent,
      threadId: this.threadId,
      likes: 0,
      datePosted: new Date(),
      userName: this.userName
    });
    this.forumPostService.submitPost(post).subscribe((post)=>{
      this.snackBar.open('Post saved. Yay!', 'Close', {
        duration: 3000,
      });
      this.userService.setUserName(this.userName);
    });
  }
}

