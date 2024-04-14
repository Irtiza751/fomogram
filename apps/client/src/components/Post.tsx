import Image from "next/image";
import { Heart, MessageCircle, Repeat, Send } from "react-feather";
import { Post as PostInterface } from "./Posts";
import { Cookies } from "@client/lib/Cookies";
import { useState } from "react";
import { useRequest } from "@client/hooks/useRequest";

export function Post({ post }: { post: PostInterface }) {
  const encodedUserId = Cookies.get("userId");
  const userId = +window.atob(encodedUserId);

  const isLiked = post.likes.find((like) => like.userId === userId);
  const [like, setLike] = useState(Boolean(isLiked));
  const { post: request } = useRequest({
    endpoint: "/post/like",
    onSuccess(data) {
      console.log(data);
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
        <span className="font-bold">{post.user.username}</span>
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
