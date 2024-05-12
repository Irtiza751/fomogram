"use client";
import Navbar from "@client/components/Navbar";
// import { Posts } from "@client/components/Posts";
import { Post, Skeleton } from "@client/components/Post";
import { useFetch } from "@client/hooks/useFetch";

export interface Post {
  id: number;
  userId: number;
  caption: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  user: User;
  likes: Array<{ userId: number }>;
}

export interface User {
  image: string;
  username: string;
}

export default function Home() {
  const { data: posts, isLoading } = useFetch<Post[]>({
    endpoint: "/post/allposts",
  });

  return (
    <>
      <Navbar />
      <main className="max-w-xl mx-auto">
        {isLoading ? (
          <>
            <Skeleton />
            <Skeleton />
          </>
        ) : (
          posts?.map((post) => <Post key={post.id} post={post} />)
        )}
      </main>
      {/* <Button
        variant="outline"
        className="rounded-full fixed bottom-24 left-24"
      >
        <Edit3 size={16} />
        <span className="ml-2">Quick Post</span>
      </Button> */}
    </>
  );
}
