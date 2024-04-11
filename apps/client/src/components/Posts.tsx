"use client";

import { Post } from "./Post";
import { useFetch } from "@client/hooks/useFetch";

export interface Post {
  id: number;
  userId: number;
  caption: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  user: User;
}

export interface User {
  image: string;
  username: string;
}

export function Posts() {
  const { data: posts, isLoading } = useFetch<Post[]>({
    endpoint: "/post/allposts",
  });

  return isLoading ? (
    <>
      <Loading />
      <Loading />
    </>
  ) : (
    posts?.map((post) => <Post key={post.id} post={post} />)
  );
}

export const Loading = () => {
  return (
    <div className="border border-slate-200 rounded-md p-4 w-full mx-auto mb-5">
      <div className="animate-pulse flex space-x-4">
        <div className="rounded-full bg-slate-200 h-10 w-10"></div>
        <div className="flex-1 space-y-6 py-1">
          <div className="h-96 bg-slate-200 rounded"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-200 rounded col-span-2"></div>
              <div className="h-2 bg-slate-200 rounded col-span-1"></div>
            </div>
            <div className="h-2 bg-slate-200 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
