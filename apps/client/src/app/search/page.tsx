import Navbar from "@client/components/Navbar";
import { Button } from "@fomogram/ui";
import Image from "next/image";
import { Search } from "react-feather";

const users = [
  {
    id: 1,
    username: "Muhammad Irtiza",
    followers: 500,
    isFollowing: false,
    image: "/imgs/avatar.jpeg",
    email: "irtiza@email.com",
  },
  {
    id: 2,
    username: "Huzaifa Zubair",
    followers: 700,
    isFollowing: true,
    image: "/imgs/avatar.jpeg",
    email: "huzaifa@email.com",
  },
];

export default function page() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen max-w-xl mx-auto relative px-4">
        <form className="flex items-center ring-2 ring-zinc-200 focus-within:ring-indigo-700 px-4 py-1 rounded-xl sticky top-20 bg-white shadow-lg">
          <Search size={18} color="#a1a1aa" />
          <input
            type="text"
            name="search"
            placeholder="Search"
            className="flex-1 px-2 py-2 leading-8 text-[14px]"
            autoFocus={true}
          />
        </form>
        <div className="mt-10">
          {users.map((user) => (
            <div className="flex items-start gap-3 mb-4 border p-3 rounded-lg">
              <Image
                src={user.image}
                alt={user.username}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="flex items-center flex-1">
                <div className="flex-1 text-[14px]">
                  <p className="font-semibold">{user.username}</p>
                  <p>{user.email}</p>
                  <p>
                    <small>{user.followers} followers</small>
                  </p>
                </div>
                <Button variant="outline">
                  {user.isFollowing ? "Following" : "Follow"}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
