import { fomo } from "@client/api/fomo";
import { Button } from "@fomogram/ui";
import { useFormik } from "formik";
import Image from "next/image";
import { Hash as HashIcon, Image as ImageIcon } from "react-feather";
import { object, string, array, InferType } from "yup";

const postSchema = object({
  caption: string().required(),
  // tags: array(string()),
  image: string(),
});

export type Post = InferType<typeof postSchema>;

export default function NewPost() {
  const { values, handleSubmit, handleChange, isValid } = useFormik<Post>({
    validationSchema: postSchema,
    initialValues: {
      caption: "",
      image: "https://avatars.githubusercontent.com/u/91867702?v=4",
      // tags: [],
    },
    async onSubmit(post: Post) {
      console.log(post);
      try {
        const { data } = await fomo.post("/post/create", post);
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <form
      className="bg-white rounded-lg p-6 outline-none"
      onSubmit={handleSubmit}
    >
      <div className="flex items-start gap-3">
        <Image
          src="/imgs/avatar.jpeg"
          alt="Muhammad Irtiza"
          className="rounded-full ring-2 ring-offset-1 ring-slate-200"
          width={40}
          height={40}
        />
        <div className="w-full">
          <p className="font-semibold">Muhammad Irtiza</p>
          <input
            value={values.caption}
            onChange={handleChange}
            name="caption"
            className="w-full outline-none resize-none h-auto mb-3"
            placeholder="Start the Fomo"
          />
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <label
                htmlFor="image"
                title="Upload image"
                className="cursor-pointer"
              >
                <ImageIcon size={18} color="#999999" />
              </label>
              <input
                name="image"
                onChange={handleChange}
                hidden
                type="file"
                id="image"
              />
              <button title="Add tags" type="button">
                <HashIcon size={18} color="#999999" />
              </button>
            </div>
            <Button
              type="submit"
              disabled={!isValid}
              className="rounded-full"
              variant={isValid ? "primary" : "disabled"}
            >
              New Post
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}
