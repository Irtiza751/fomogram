"use client";
import Link from "next/link";
import { Button, Input } from "@fomogram/ui";
import { useFormik } from "formik";
import { InferType, object, string } from "yup";
import { useState } from "react";
import { Eye, EyeOff } from "react-feather";
import { fomo } from "@client/api/fomo";
import { useRouter } from "next/navigation";

const resetSchema = object({
  password: string().required("Password is required").min(6),
});

type NewPassword = InferType<typeof resetSchema>;
type ForgotProps = { params: Record<string, any> };

export default function Forgot({ params }: ForgotProps) {
  const router = useRouter();
  const [show, setShow] = useState(false);

  const onSubmit = async (password: NewPassword) => {
    const userId = window.atob(decodeURIComponent(params.userId));
    const payload = {
      userId,
      ...password,
    };

    try {
      const { data } = await fomo.post("/auth/update-password", payload);
      if (data) {
        router.push("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const { values, errors, touched, handleSubmit, handleChange } = useFormik({
    initialValues: {
      password: "",
    },
    onSubmit,
    validationSchema: resetSchema,
  });

  return (
    <form
      onSubmit={handleSubmit}
      className="border bg-white rounded w-full max-w-md px-6 py-8 m-auto space-y-4"
    >
      <h2 className="text-2xl font-bold mb-5">Enter your new Password</h2>
      <p className="text-stone-700">
        At least 6 characters, with uppercase & lowercase letters are required.
      </p>
      <div className="relative">
        <Input
          name="password"
          value={values.password}
          onChange={handleChange}
          label="New Password*"
          placeholder="* * * * * * * * *"
          type={show ? "text" : "password"}
        />
        <div
          className="absolute bottom-2.5 right-3 text-gray-700 cursor-pointer"
          onClick={() => setShow(!show)}
        >
          {show ? <Eye size={16} /> : <EyeOff size={16} />}
        </div>
      </div>
      {touched.password && errors.password ? (
        <small className="text-red-700">{errors.password}</small>
      ) : null}

      <Button type="submit" className="w-full">
        Reset Password
      </Button>
      <p className="text-center">
        Do you already know your password?{" "}
        <Link className="text-indigo-700" href="/login">
          Login
        </Link>
      </p>
    </form>
  );
}
