export class ForumThread {
  id: string = null;
  userName: string = null;
  dateCreated: Date = new Date();
  title: string = '';
  content: string = '';
  lastPostDate: Date = new Date();
  postsCount: number = 1;
  views: number = 0;
  likes: number = 0;

  constructor(thread: any){
    Object.keys(thread).forEach(k=>{
      this[k] = thread[k];
    });
  }
}

export class ForumPost {
  threadId: string = null;
  userName: string = '';
  datePosted: Date = new Date();
  content: string = '';
  likes: number = 0;

  constructor(post: any){
    Object.keys(post).forEach(k=>{
      this[k] = post[k];
    });
  }
}
