"use client";
import Navbar from "@client/components/Navbar";
import { Posts } from "@client/components/Posts";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="max-w-xl mx-auto">
        <Posts />
      </main>
    </>
  );
}
