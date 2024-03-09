import Image from "next/image";
import Navbar from "@client/components/Navbar";
import ProfileGroup from "@client/components/Followers";
import { Button, Tabs } from "@fomogram/ui";

const followers = [
  {
    avatar: "https://ui-avatars.com/api/?name=Muhammad%2Azam",
    name: "Muhammad Azam",
  },
  {
    avatar: "https://ui-avatars.com/api/?name=John%2Doe",
    name: "John Doe",
  },
  {
    avatar: "/imgs/avatar.jpeg",
    name: "Muhammad Irtiza",
  },
];

export default function Profile() {
  return (
    <>
      <Navbar />
      <main className="container pt-10 max-w-3xl space-y-3">
        <div className="flex justify-between items-cente">
          <div>
            <h5 className="text-2xl font-bold">Muhammad Irtiza</h5>
            <p>example@gmail.com</p>
          </div>
          <Image
            width={75}
            height={75}
            alt="Muhammad Irtiza"
            src="/imgs/avatar.jpeg"
            className="rounded-full ring-2 ring-offset-2 ring-blue-600 cursor-pointer"
          />
        </div>
        <p className="bio">
          Example bio Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Culpa quaerat non facere? Pariatur, minima facilis.
        </p>
        <ProfileGroup followers={followers} />
        <Button variant="outline" className="w-full">
          Edit Profile
        </Button>

        <Tabs />

        <div className="tab-wrapper">
          <nav className="relative z-0 flex" role="tablist">
            <button className="flex-1 py-2 border-b-2 border-blue-600">
              Posts
            </button>
            <button className="flex-1 py-2 border-b-2 hover:border-blue-600/50">
              Comments
            </button>
            <button className="flex-1 py-2 border-b-2 hover:border-blue-600/50">
              Reposts
            </button>
          </nav>
          <div className="tabs mt-3">
            <div className="grid place-items-center h-80 w-full">
              <Button>Create a new Post</Button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
