export class ForumThread {
  id: string;
  userName: string;
  dateCreated: Date;
  title: string;
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
}
