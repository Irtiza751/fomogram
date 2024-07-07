"use client";
import { ActivityCard } from "@client/components/ActivityCard";
import Navbar from "@client/components/Navbar";
import { useFetch } from "@client/hooks/useFetch";
import { Spinner } from "@fomogram/ui";

export interface Notification {
  id: number;
  isRead: boolean;
  type: string;
  message: string;
  producer: Producer;
}

export interface Producer {
  id: number;
  username: string;
  image: string;
}

export default function Activities() {
  const { data } = useFetch<Notification[]>({
    endpoint: "/notification/all",
    onSuccess(res) {
      console.log(res);
    },
  });

  return (
    <>
      <Navbar />
      <main className="min-h-screen max-w-xl mx-auto relative px-4 mt-4 space-y-4">
        {data ? (
          data.map((notification) => {
            return (
              <ActivityCard
                key={notification.id}
                image={notification.producer.image}
                username={notification.producer.username}
                message={notification?.message}
                type="new_follower"
              />
            );
          })
        ) : (
          <div className="grid place-items-center text-indigo-600">
            <Spinner size={40} />
          </div>
        )}
        {/* <ActivityCard
          image="/imgs/avatar.jpeg"
          username="Muhammad Irtiza"
          message="Started following you."
          type="new_follower"
        /> */}
        {/* <ActivityCard
          image="/imgs/avatar.jpeg"
          username="Muhammad Irtiza"
          message="Commented your post"
          type="comment_post"
          comment="You are the best brother in the world"
        />
        <ActivityCard
          image="/imgs/avatar.jpeg"
          username="Muhammad Irtiza"
          message="Liked your post"
          type="like_post"
        />
        <ActivityCard
          image="/imgs/avatar.jpeg"
          username="Muhammad Irtiza"
          message="Shared a new post"
          type="new_post"
          content="Hi there, this is my first post on this new platform Fomogram & this is amazing"
        /> */}
      </main>
    </>
  );
}
