import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ForumPostApiService} from '../../services/forum.post.api.service';
import {MatSnackBar} from '@angular/material';
import {ForumPost} from '../../schemas/forum.schemas';
import {UserService} from '../../../user/services/user.service';


@Component({
  selector: 'add-post-input',
  templateUrl: './addPostInput.component.html',
  styleUrls: ['./addPostInput.component.scss']
})
export class AddPostInputComponent implements OnInit{
  @Input() threadId: string;
  @Output() postAdded: EventEmitter<ForumPost> = new EventEmitter<ForumPost>();

  writingPost: boolean = false;
  post: ForumPost;

  constructor(private forumPostService: ForumPostApiService, public snackBar: MatSnackBar, private userService: UserService){

  }

  ngOnInit(){
    this.post = new ForumPost({
      threadId: this.threadId,
      userName: this.userService.getUserName()
    });
    this.writingPost = false;
  }

  submitPost(){
    this.forumPostService.submitPost(this.post).subscribe((post)=>{
      this.snackBar.open('Post saved. Yay!', 'Close', {
        duration: 3000,
      });
      this.userService.setUserName(this.post.userName);
      this.postAdded.emit(post);
      this.ngOnInit();
    });
  }
}

