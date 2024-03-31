"use client";

import { fomo } from "@client/api/fomo";
import Navbar from "@client/components/Navbar";
import { Post } from "@client/components/Post";
import { useEffect, useState } from "react";

export interface Post {
  id: number;
  userId: number;
  caption: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    async function getPosts() {
      try {
        const { data } = await fomo.get<Post[]>("/post/allposts");

        console.log(data);
        setPosts(data);
      } catch (error) {
        console.log(error);
      }
    }
    getPosts();
  }, []);

  return (
    <>
      <Navbar />
      <main className="container pt-10 max-w-3xl">
        {posts.map((post) => (
          <Post key={post.id} />
        ))}
      </main>
    </>
  );
}
