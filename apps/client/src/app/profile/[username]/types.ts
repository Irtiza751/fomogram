export type Profile = {
  username: string;
  email: string;
  bio: any;
  image: string;
  followers: Follower[];
  posts: Post[];
};

export type Follower = {
  id: number;
  followerId: number;
  followingId: number;
};

export type Post = {
  id: number;
  userId: number;
  caption: string;
  image?: string;
  createdAt: string;
  updatedAt: string;
};
