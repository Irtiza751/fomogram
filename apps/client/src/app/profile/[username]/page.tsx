"use client";

import Image from "next/image";
import Navbar from "@client/components/Navbar";
import ProfileGroup from "@client/components/Followers";
import { Button, Tabs } from "@fomogram/ui";
// import { Metadata } from "next";
import { useFetch } from "@client/hooks/useFetch";
import { Profile as ProfileType } from "./types";

// export const metadata: Metadata = {
//   title: "Fomogram | Profile",
// };

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
  const { data } = useFetch<ProfileType>({
    endpoint: "/user/profile",
  });

  return (
    <>
      <Navbar />
      <main className="container pt-10 max-w-2xl space-y-3">
        {data && (
          <>
            <div className="flex justify-between items-cente">
              <div>
                <h5 className="text-2xl font-bold">{data?.username}</h5>
                <p>{data?.email}</p>
              </div>
              <Image
                width={75}
                height={75}
                alt={data?.username || ""}
                src={data?.image || ""}
                className="rounded-full ring-2 ring-offset-2 ring-blue-600 cursor-pointer"
              />
            </div>
            <p className="bio mt-2">{data?.bio}</p>

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
          </>
        )}
      </main>
    </>
  );
}
