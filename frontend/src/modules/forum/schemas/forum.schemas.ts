export class ForumThread {
  id: string;
  userName: string;
  dateCreated: Date;
  name: string;
  lastPostDate: Date;
  postsCount: number;
  views: number;
}

export class ForumPost {
  threadId: string;
  userName: string;
  datePosted: Date;
  content: string;
  votes: number;
}
