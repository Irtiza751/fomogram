import Image from "next/image";
import { Heart, MessageCircle, Repeat, Send } from "react-feather";

export function Post() {
  return (
    <div className="fomo-card grid grid-cols-12 gap-3 my-5">
      <div className="fomo-thread relative">
        <Image
          src="/imgs/avatar.jpeg"
          alt="Muhammad Irtiza"
          className="rounded-full ring-2 ring-offset-1 ring-slate-200"
          width={40}
          height={40}
        />
      </div>
      <figure className="col-start-2 col-span-full ml-1 space-y-3">
        <span className="font-semibold">Muhammad Irtiza</span>
        {/* content */}
        <figcaption className="text-stone-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
          veritatis quae iusto at non dolore!
        </figcaption>
        {/* post iamge it's conditional */}
        <div>
          <Image
            src="/imgs/post.jpg"
            alt="Image name"
            className="block rounded-lg"
            width={550}
            height={340}
          />
        </div>
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
