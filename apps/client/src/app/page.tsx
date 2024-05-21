import Image from "next/image";
import Link from "next/link";

export interface Post {
  id: number;
  userId: number;
  caption: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  user: User;
  likes: Array<{ userId: number }>;
}

export interface User {
  image: string;
  username: string;
}

export default function Home() {
  console.log(`Root route!`);

  return (
    <main className="max-w-xl mx-auto py-4">
      <h1>Root route / Landing page</h1>
    </main>
  );
}
