"use client";

import Navbar from "@client/components/Navbar";
import { Post, Skeleton } from "@client/components/Post";
import { useFetch } from "@client/hooks/useFetch";
import { Cookies } from "@client/lib/Cookies";
import { SocketContext } from "@client/providers/notification";
import { useContext, useEffect } from "react";

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

export default function Feeds() {
  const socket = useContext(SocketContext);
  const { data: posts, isLoading } = useFetch<Post[]>({
    endpoint: "/post/allposts",
  });

  useEffect(() => {
    const encodedUserId = Cookies.get("userId");
    socket?.connect(encodedUserId);
  }, []);

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
    </>
  );
}
