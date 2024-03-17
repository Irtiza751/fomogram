import Navbar from "@client/components/Navbar";
import { Post } from "@client/components/Post";
import { Button } from "@fomogram/ui";
import Image from "next/image";

export default async function Home() {
  return (
    <>
      <Navbar />
      <main className="container pt-10 max-w-3xl">
        <div className="flex gap-5 items-center border-b pb-5">
          <Image
            width={40}
            height={40}
            alt="Muhammad Irtiza"
            src="/imgs/avatar.jpeg"
            className="rounded-full ring-2 ring-offset-1 ring-indigo-600"
          />
          <input
            type="text"
            placeholder="Start a new Fomo"
            className="w-full h-full"
          />
          <Button className="w-auto rounded-full">Submit</Button>
        </div>

        <Post />
        <Post />
        <Post />
      </main>
    </>
  );
}
