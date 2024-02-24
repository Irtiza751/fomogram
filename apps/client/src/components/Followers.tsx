"use client";
import Image from "next/image";

type FollowersProps = {
  followers: { name: string; avatar: string }[];
};

// image dimentions widht/height
const aspect = 25; // 25px/25px

export default function Followers({ followers }: FollowersProps) {
  return (
    <button className="flex items-center py-2">
      <div className="flex -space-x-2">
        {followers.map((follower, i) => (
          <Image
            key={i}
            width={aspect}
            height={aspect}
            alt={follower.name}
            src={follower.avatar}
            className="inline-block rounded-full ring-2 ring-white hover:scale-105"
          />
        ))}
      </div>
      <span className="ml-3 leading-none text-sm font-semibold hover:underline">
        10 followers
      </span>
    </button>
  );
}
