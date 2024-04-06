// import { fomo } from "@client/api/fomo";
import { fomo } from "@client/api/fomo";
import { Button } from "@fomogram/ui";
import Image from "next/image";
import { ChangeEvent, FormEvent, useState } from "react";
import { Hash as HashIcon, Image as ImageIcon } from "react-feather";

export default function NewPost() {
  const [file, setFile] = useState<File>();

  const submitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const target = event.target as HTMLFormElement;
    const formData = new FormData(target);

    console.log(formData.get("image"));
    try {
      const { data } = await fomo.post("/post/create", formData);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const uploadImage = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;

    if (files) {
      setFile(files[0]);
    }
  };

  return (
    <form
      className="bg-white rounded-lg p-6 outline-none"
      onSubmit={submitHandler}
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
            name="caption"
            className="w-full outline-none resize-none h-auto mb-3"
            placeholder="Start the Fomo"
          />
          {file && (
            <Image
              className="rounded-md mb-3 outline-2"
              src={URL.createObjectURL(file)}
              alt={file.name}
              width={400}
              height={600}
            />
          )}
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
                hidden
                type="file"
                id="image"
                onChange={uploadImage}
              />
              <button title="Add tags" type="button">
                <HashIcon size={18} color="#999999" />
              </button>
            </div>
            <Button type="submit" className="rounded-full">
              New Post
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}
