"use client";

import Navbar from "@client/components/Navbar";
import useDebounceCallback from "@client/hooks/useDebounceCallback";
import { useFetch } from "@client/hooks/useFetch";
import { Button, Spinner } from "@fomogram/ui";
import Image from "next/image";
import { ChangeEvent } from "react";
import { Search } from "react-feather";

type User = {
  id: number;
  username: string;
  email: string;
  image: string;
};

export default function page() {
  const {
    data: users,
    isLoading,
    fetch,
  } = useFetch<User[]>({
    endpoint: "/user/search",
  });

  const onSeach = async (e: ChangeEvent<HTMLInputElement>) => {
    // search term
    const term = e.target.value;
    console.log({ term });
    fetch({ search: term });
  };

  const debounceSearch = useDebounceCallback(onSeach, 600);

  return (
    <>
      <Navbar />
      <main className="min-h-screen max-w-2xl mx-auto relative px-4">
        <form className="flex items-center ring-2 ring-zinc-200 focus-within:ring-indigo-700 px-4 py-1 rounded-xl sticky top-20 bg-white shadow-lg">
          <Search size={18} color="#a1a1aa" />
          <input
            type="text"
            name="search"
            placeholder="Search"
            className="flex-1 px-2 py-2 leading-8 text-[14px]"
            autoFocus={true}
            onChange={debounceSearch}
          />
        </form>
        <div className="mt-10">
          {isLoading ? (
            <Spinner />
          ) : (
            users?.map((user) => (
              <div
                key={user.id}
                className="flex items-start gap-3 mb-4 border p-3 rounded-lg"
              >
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
                      <small>{0} followers</small>
                    </p>
                  </div>
                  <Button variant="outline">
                    {/* {user?.isFollowing ? "Following" : "Follow"} */}
                    Folow
                  </Button>
                </div>
              </div>
            ))
          )}
        </div>
      </main>
    </>
  );
}
