import { ActivityCard } from "@client/components/ActivityCard";
import Navbar from "@client/components/Navbar";

export default function Activities() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen max-w-xl mx-auto relative px-4 mt-4 space-y-4">
        <ActivityCard
          image="/imgs/avatar.jpeg"
          username="Muhammad Irtiza"
          message="Started following you."
          type="new_follower"
        />
        <ActivityCard
          image="/imgs/avatar.jpeg"
          username="Muhammad Irtiza"
          message="Commented your post"
          type="comment_post"
          comment="You are the brother in the world"
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
        />
      </main>
    </>
  );
}
