import Image from "next/image";
import { Heart, MessageCircle, Repeat, Send } from "react-feather";
import { Post as PostInterface } from "./Posts";

export function Post({ post }: { post: PostInterface }) {
  return (
    <div className="fomo-card grid grid-cols-12 gap-3 my-5">
      <div className="fomo-thread relative">
        <Image
          src={post.user.image}
          alt="Muhammad Irtiza"
          className="rounded-full ring-2 ring-offset-1 ring-slate-200"
          width={40}
          height={40}
        />
      </div>
      <figure
        className={`col-start-2 col-span-full space-y-3 px-4 ${
          !post.image ? "py-4 border rounded-lg" : ""
        }`}
      >
        <span className="font-semibold">{post.user.username}</span>
        {/* content */}
        <figcaption className="text-stone-700">{post.caption}</figcaption>
        {/* post iamge it's conditional */}
        {post.image && (
          <Image
            src={post.image}
            alt="Image name"
            className="block rounded-lg"
            width={550}
            height={340}
            priority={true}
          />
        )}
        {/* like comment repost share */}
        <div className="flex gap-4">
          <button title="Like">
            <Heart size={20} />
          </button>
          <button title="Comment">
            <MessageCircle size={20} />
          </button>
          <button title="Repost">
            <Repeat size={20} />
          </button>
          <button title="share">
            <Send size={20} />
          </button>
        </div>
      </figure>
    </div>
  );
}
