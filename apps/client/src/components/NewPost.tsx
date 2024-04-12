import { useRequest } from "@client/hooks/useRequest";
import { Button } from "@fomogram/ui";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import { Hash as HashIcon, Image as ImageIcon } from "react-feather";

type NewpostProps = {
  closeDialog(): void;
};

export default function NewPost({ closeDialog }: NewpostProps) {
  const router = useRouter();
  const [file, setFile] = useState<File>();

  const { isLoading, post } = useRequest({
    endpoint: "/post/create",
    onSuccess(data) {
      console.log(data);
      closeDialog();
      router.replace("/");
    },
  });

  const submitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const target = event.target as HTMLFormElement;
    const formData = new FormData(target);
    post(formData);
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
            <Button type="submit" className="rounded-full" disabled={isLoading}>
              {isLoading ? "Creating..." : <span>Create</span>}
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}
