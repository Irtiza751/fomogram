import { Heart, MessageCircle, Repeat } from "react-feather";

export function Post() {
  return (
    <div className="fomo-card grid grid-cols-12 gap-3 mt-5">
      <div className="fomo-thread relative">
        <img
          src="/avatar.jpeg"
          alt="Muhammad Irtiza"
          className="w-10 h-10 rounded-full ring-2 ring-offset-1 ring-slate-200"
        />
      </div>
      <figure className="col-start-2 col-span-full ml-1 space-y-2">
        <span className="font-semibold">Muhammad Irtiza</span>
        {/* content */}
        <figcaption>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
          veritatis quae iusto at non dolore!
        </figcaption>
        {/* post iamge it's conditional */}
        <div>
          <img src="/post.jpg" alt="Image name" className="block rounded-lg" />
        </div>
        {/* like comment repost share */}
        <div className="flex gap-4 mt-3">
          <button>
            <Heart />
          </button>
          <button>
            <MessageCircle />
          </button>
          <button>
            <Repeat />
          </button>
        </div>
      </figure>
    </div>
  );
}
