"use client";

import Image from "next/image";
import Navbar from "@client/components/Navbar";
import ProfileGroup from "@client/components/Followers";
import { Button, Dialog, Input, Spinner, Textarea } from "@fomogram/ui";
// import { Metadata } from "next";
import { useFetch } from "@client/hooks/useFetch";
import { Profile as ProfileType } from "./types";
import { ProfileTabs } from "@client/components/ProfileTabs";
import { useState } from "react";
import { InferType, object, string } from "yup";
import { useFormik } from "formik";
import { useRequest } from "@client/hooks/useRequest";
import { ButtonClickEvent, UploadEvent } from "@client/types/events";

// export const metadata: Metadata = {
//   title: "Fomogram | Profile",
// };

const followers = [
  {
    avatar: "https://ui-avatars.com/api/?name=Muhammad%2Azam",
    name: "Muhammad Azam",
  },
  {
    avatar: "https://ui-avatars.com/api/?name=John%2Doe",
    name: "John Doe",
  },
  {
    avatar: "/imgs/avatar.jpeg",
    name: "Muhammad Irtiza",
  },
];

const profileSchema = object({
  username: string().required("username is required"),
  bio: string().max(255, { message: "Max length is 255" }),
});

type ProfileForm = InferType<typeof profileSchema>;

export default function Profile() {
  const [showEdit, setShowEdit] = useState(false);
  const [image, setImage] = useState<File>();

  const { post, isLoading } = useRequest({
    endpoint: "/user/update",
    onSuccess(res) {
      console.log(res);
    },
  });

  const { values, errors, touched, handleSubmit, handleChange, setValues } =
    useFormik({
      initialValues: {
        username: "",
        bio: "",
      },
      onSubmit: async (payload: ProfileForm) => {
        const formData = new FormData();
        formData.append("username", payload.username);
        formData.append("bio", payload?.bio || "");
        formData.append("image", image || "");

        // console.log(Object.fromEntries(formData.entries()));
        await post(payload);
      },
      validationSchema: profileSchema,
    });

  const { data } = useFetch<ProfileType>({
    endpoint: "/user/profile",
    onSuccess(data) {
      setValues({ username: data.username || "", bio: data.bio || "" });
    },
  });

  const onProfileUpload = (e: UploadEvent) => {
    const { files } = e.target;

    if (files) {
      setImage(files[0]);
    }
  };

  const removeImage = (e: ButtonClickEvent) => {
    e.preventDefault();
    setImage(undefined);
  };

  return (
    <>
      <Navbar />
      <main className="container pt-10 max-w-2xl space-y-3">
        {data && (
          <>
            <div className="flex justify-between items-cente">
              <div>
                <h5 className="text-2xl font-bold">{data.username}</h5>
                <p>{data.email}</p>
              </div>
              <Image
                width={75}
                height={75}
                alt={data.username}
                src={data.image}
                className="rounded-full ring-2 ring-offset-2 ring-blue-600 cursor-pointer"
              />
            </div>
            {data.bio && <p className="bio mt-2">{data.bio}</p>}

            <ProfileGroup followers={followers} />

            <Button
              variant="outline"
              className="w-full"
              onClick={() => setShowEdit(true)}
            >
              Edit Profile
            </Button>

            <Dialog show={showEdit} onClose={() => setShowEdit(false)}>
              <form
                className="bg-white px-6 py-4 rounded-xl"
                onSubmit={handleSubmit}
              >
                <h3 className="font-semibold mb-3">Edit profile</h3>
                <div>
                  <input
                    type="file"
                    className="hidden"
                    id="file"
                    name="image"
                    onChange={onProfileUpload}
                  />
                  {image ? (
                    <Image
                      className="rounded-full mb-3 outline-2"
                      src={URL.createObjectURL(image)}
                      alt={image.name}
                      width={80}
                      height={80}
                    />
                  ) : null}
                  <Button type="button" className="w-full" variant="outline">
                    <label htmlFor="file" className="w-full cursor-pointer">
                      Upload Picture
                    </label>
                  </Button>
                </div>
                <Input
                  type="text"
                  label="Username"
                  name="username"
                  onChange={handleChange}
                  value={values.username}
                />
                <Textarea
                  label="Bio"
                  name="bio"
                  placeholder="You bio"
                  onChange={handleChange}
                  value={values.bio}
                />
                <Button type="submit" className="w-full py-2 mt-4">
                  {isLoading ? <Spinner size={24} /> : "Update"}
                </Button>
              </form>
            </Dialog>

            <ProfileTabs />
          </>
        )}
      </main>
    </>
  );
}
