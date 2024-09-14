import Image from "next/image";
import { Heart, MessageCircle, Repeat, Send } from "react-feather";
import { Post as PostInterface } from "@client/app/feeds/page";
import { Cookies } from "@client/lib/Cookies";
import { useState } from "react";
import { useRequest } from "@client/hooks/useRequest";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function Post({ post }: { post: PostInterface }) {
  const encodedUserId = Cookies.get("userId");
  const userId = +window.atob(encodedUserId);
  const router = useRouter();

  const isLiked = post.likes.find((like) => like.userId === userId);
  const [like, setLike] = useState(Boolean(isLiked));
  const { post: request } = useRequest({
    endpoint: "/post/like",
    onSuccess() {
      // console.log(data);
    },
    onError() {
      setLike(false);
    },
  });

  const onLikePress = async () => {
    setLike(!like);
    request({ userId, postId: post.id });
  };

  return (
    <div className="fomo-card grid grid-cols-10 gap-2 my-5 px-2">
      <div className="fomo-thread relative">
        <Image
          src={post.user.image}
          alt="Muhammad Irtiza"
          className="relative rounded-full ring-2 ring-offset-1 ring-slate-200"
          width={40}
          height={40}
        />
      </div>
      <figure className={`col-start-2 col-span-full space-y-2`}>
        <Link
          href={`/profile/${post.user.username}`}
          className="hover:underline"
        >
          <span className="font-bold">{post.user.username}</span>
        </Link>
        {/* content */}
        <figcaption>{post.caption}</figcaption>
        {/* post iamge it's conditional */}
        {post.image && (
          <Image
            src={post.image}
            alt="Image name"
            className="rounded-lg"
            width={550}
            height={340}
            priority={true}
          />
        )}
        {/* like comment repost share */}
        <div className="flex gap-4">
          <button
            title="Like"
            onClick={onLikePress}
            className={like ? "text-red-600" : "inherit"}
          >
            <Heart size={20} fill={like ? "#dc2626" : "none"} />
          </button>
          <button
            title="Comment"
            onClick={() => router.push("/comments/12312")}
          >
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

export const Skeleton = () => {
  return (
    <div className="rounded-md p-4 w-full mx-auto mb-5">
      <div className="animate-pulse flex space-x-4">
        <div className="rounded-full bg-slate-200 h-10 w-10"></div>
        <div className="flex-1 space-y-6 py-1">
          <div className="space-y-3">
            <div className="h-2 bg-slate-200 rounded"></div>
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-200 rounded col-span-2"></div>
            </div>
          </div>
          <div className="h-96 bg-slate-200 rounded"></div>
        </div>
      </div>
    </div>
  );
};
