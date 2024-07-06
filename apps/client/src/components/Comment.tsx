import Image from "next/image";
import Link from "next/link";

export function Comment() {
  return (
    <div className="fomo-card grid grid-cols-10 gap-2 my-5 px-2">
      <div className="fomo-thread relative">
        <Image
          src="/imgs/avatar.jpeg"
          alt="Muhammad Irtiza"
          className="relative rounded-full ring-2 ring-offset-1 ring-slate-200"
          width={40}
          height={40}
        />
      </div>
      <figure className="col-start-2 col-span-full space-y-2 border-b">
        <Link href={`/profile/Muhammad Irtiza`} className="hover:underline">
          <span className="font-bold">Muhammad Irtiza</span>
        </Link>
        {/* content */}
        <figcaption>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste eum
          porro quaerat laudantium velit nihil!
        </figcaption>
        {/* post iamge it's conditional */}
        <Image
          src="/imgs/post.jpg"
          alt="Image name"
          className="rounded-lg"
          width={550}
          height={340}
          priority={true}
        />
        <input
          className="py-2 w-full"
          type="text"
          placeholder="Type your comment"
        />

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quidem
          velit dolorum, atque, nesciunt, recusandae nobis eaque ipsa placeat et
          quibusdam voluptate repudiandae nulla voluptatem alias porro unde
          eveniet explicabo?
        </p>
      </figure>
    </div>
  );
}
