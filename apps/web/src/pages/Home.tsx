import { Button } from "@fomogram/ui";
import { RootLayout } from "../components/RootLayout";
import { Post } from "../components/Post";

export function Home() {
  return (
    <RootLayout>
      <div className="flex gap-5 items-center border-b pb-5">
        <img
          src="/avatar.jpeg"
          alt="Muhammad Irtiza"
          className="w-10 h-10 rounded-full ring-2 ring-offset-1 ring-indigo-600"
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
    </RootLayout>
  );
}
