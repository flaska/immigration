export class ForumThread {
  id: string;
  userName: string;
  dateCreated: Date;
  title: string;
  content: string;
  lastPostDate: Date;
  postsCount: number;
  views: number;
  likes: number;
}

export class ForumPost {
  threadId: string;
  userName: string;
  datePosted: Date;
  content: string;
  likes: number;

  constructor(post: ForumPost){
    Object.keys(post).forEach(k=>{
      this[k] = post[k];
    });
  }
}
