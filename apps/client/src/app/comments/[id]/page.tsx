"use client";
import { Comment } from "@client/components/Comment";
import Navbar from "@client/components/Navbar";

/*
  post={{
    caption: "This is some kind of caption",
    createdAt: "12-231-123",
    id: 4,
    image: "/imgs/post.jpg",
    likes: [{ userId: 26 }],
    updatedAt: "1231-1231",
    userId: 26,
    user: {
      image: "/imgs/avatar.jpeg",
      username: "Muhammad Irtiza",
    },
  }}
*/

export default function comment() {
  return (
    <>
      <Navbar />
      <main className="max-w-xl mx-auto min-h-screen">
        <Comment />
      </main>
    </>
  );
}
