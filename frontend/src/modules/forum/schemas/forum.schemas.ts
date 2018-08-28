export class ForumThread {
  id: string = Math.random().toString(36).substring(2);
  userName: string = null;
  dateCreated: Date = new Date();
  title: string = null;
  content: string = null;
  lastPostDate: Date = new Date();
  postsCount: number = 0;
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
  userName: string = null;
  datePosted: Date = new Date();
  content: string = null;
  likes: number = 0;

  constructor(post: any){
    Object.keys(post).forEach(k=>{
      this[k] = post[k];
    });
  }
}
