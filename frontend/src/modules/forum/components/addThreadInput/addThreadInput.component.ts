import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {ForumThread} from '../../schemas/forum.schemas';
import {UserService} from '../../../user/services/user.service';
import {ForumThreadApiService} from '../../services/forum.thread.api.service';


@Component({
  selector: 'add-thread-input',
  templateUrl: './addThreadInput.component.html',
  styleUrls: ['./addThreadInput.component.scss']
})
export class AddThreadInputComponent implements OnInit{
  @Output() threadAdded: EventEmitter<ForumThread> = new EventEmitter<ForumThread>();

  writingPost: boolean = false;
  thread: ForumThread = new ForumThread({userName: this.userService.getUserName()});

  constructor(private forumThreadService: ForumThreadApiService, public snackBar: MatSnackBar, private userService: UserService){
  }

  ngOnInit(){
    this.thread = new ForumThread({userName: this.userService.getUserName()});
    this.writingPost = false;
  }

  submitThread(){
    this.forumThreadService.submitThread(this.thread).subscribe((post)=>{
      this.snackBar.open('Thread saved. Yay!', 'Close', {
        duration: 3000,
      });
      this.userService.setUserName(this.thread.userName);
      this.threadAdded.emit(post);
      this.ngOnInit();
    });
  }
}

