import { useRequest } from "@client/hooks/useRequest";
import { AuthContext, AuthContextType } from "@client/providers/auth";
import { Button } from "@fomogram/ui";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useContext, useState } from "react";
import {
  Hash as HashIcon,
  Image as ImageIcon,
  X as CloseIcon,
} from "react-feather";

type NewpostProps = {
  closeDialog(): void;
};

const ALLOWED_MIMES = "image/png, image/gif, image/jpeg, video/mp4";

export default function NewPost({ closeDialog }: NewpostProps) {
  const router = useRouter();
  const [file, setFile] = useState<File>();
  const { auth } = useContext(AuthContext) as AuthContextType;

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

  const removeImage = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setFile(undefined);
  };

  return (
    <form
      className="bg-white rounded-lg p-6 outline-none"
      onSubmit={submitHandler}
    >
      <div className="flex items-start gap-3">
        <Image
          src={auth?.image || "/imgs/avatar.jpeg"}
          alt={auth?.username || ""}
          className="rounded-full ring-2 ring-offset-1 ring-slate-200"
          width={40}
          height={40}
        />
        <div className="w-full">
          <p className="font-semibold">{auth?.username || "Username"}</p>
          <input
            name="caption"
            className="w-full outline-none resize-none h-auto mb-3"
            placeholder="Start the Fomo"
          />
          {file && (
            <div className="relative inline-block">
              <button
                onClick={removeImage}
                className="absolute text-white bg-black/75 p-1 rounded-full right-2 top-2"
              >
                <CloseIcon size={16} />
              </button>
              <Image
                className="rounded-md mb-3 outline-2"
                src={URL.createObjectURL(file)}
                alt={file.name}
                width={400}
                height={600}
              />
            </div>
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
                accept={ALLOWED_MIMES}
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
