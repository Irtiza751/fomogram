"use client";

import Image from "next/image";
import Navbar from "@client/components/Navbar";
import ProfileGroup from "@client/components/Followers";
import { Button } from "@fomogram/ui";
// import { Metadata } from "next";
import { useFetch } from "@client/hooks/useFetch";
import { Profile as ProfileType } from "./types";
import { ProfileTabs } from "@client/components/ProfileTabs";

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
                <h5 className="text-2xl font-bold">{data.username}</h5>
                <p>{data.email}</p>
              </div>
              <Image
                width={75}
                height={75}
                alt={data.username}
                src={data.image}
                className="rounded-full ring-2 ring-offset-2 ring-blue-600 cursor-pointer"
              />
            </div>
            {data.bio && <p className="bio mt-2">{data.bio}</p>}

            <ProfileGroup followers={followers} />

            <Button variant="outline" className="w-full">
              Edit Profile
            </Button>

            <ProfileTabs />
          </>
        )}
      </main>
    </>
  );
}
