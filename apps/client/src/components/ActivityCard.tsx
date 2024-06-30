import { Button } from "@fomogram/ui";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  image: string;
  username: string;
  message: string;
} & (NewFollower | NewPost | LikePost | CommentPost);

type NewFollower = {
  type: "new_follower";
};

type NewPost = {
  type: "new_post";
  content: string;
};

type LikePost = {
  type: "like_post";
};

type CommentPost = {
  type: "comment_post";
  comment: string;
};

export function ActivityCard(props: Props) {
  const { image, username, message, type } = props;

  return (
    <div className="flex items-start gap-3 border p-3 rounded-lg">
      <Image
        src={image}
        alt={username}
        width={40}
        height={40}
        className="rounded-full"
      />
      <div className="flex items-center flex-1">
        <div className="flex-1 text-[14px]">
          <Link href={`/profile/${username}`} className="hover:underline">
            <p className="font-semibold">{username}</p>
          </Link>
          <p>{message}</p>
          {type === "comment_post" && (
            <p className="text-stone-500">{props.comment}</p>
          )}
          {type === "new_post" && (
            <p className="text-stone-500">{props.content}</p>
          )}
        </div>
        {type === "new_follower" ? (
          <Button variant="outline">Follow back</Button>
        ) : null}
      </div>
    </div>
  );
}
