"use client";
import Link from "next/link";
import { Button, Input } from "@fomogram/ui";
import { useFormik } from "formik";
import { InferType, object, string } from "yup";
import { useRouter } from "next/navigation";
import { loginAction } from "../actions";
import { Eye, EyeOff } from "react-feather";
import { useState } from "react";

export type Credentials = InferType<typeof loginFormSchema>;

const loginFormSchema = object({
  email: string().email("Invalid email").required("Email is required"),
  password: string().required("Password is required").min(6),
});

export default function Login() {
  const [show, setShow] = useState(false);
  const router = useRouter();

  const onSubmit = async (values: Credentials) => {
    console.log("submitting...", values);
    const res = await loginAction(values);
    if (res == "ok") {
      router.push("/");
    } else {
      console.log("err", res);
    }
  };

  const { values, errors, touched, handleSubmit, handleChange } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit,
    validationSchema: loginFormSchema,
  });

  return (
    <div className="h-full grid place-item-center">
      <form
        onSubmit={handleSubmit}
        className="border bg-white rounded w-full max-w-md px-6 py-8 m-auto space-y-4"
      >
        <h2 className="text-2xl font-bold mb-5">Login in to your account</h2>
        <Input
          name="email"
          value={values.email}
          onChange={handleChange}
          label="Username or Email*"
        />
        {touched.email && errors.email ? (
          <small className="text-red-700">{errors.email}</small>
        ) : null}
        <div className="relative">
          <Input
            name="password"
            value={values.password}
            onChange={handleChange}
            label="Password*"
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
        <Link
          href="/forgot"
          className="block text-indigo-800 text-sm text-right hover:underline font-semibold"
        >
          Forgot password?
        </Link>
        <Button type="submit" className="w-full">
          Login
        </Button>
        <p className="text-center">
          Don't have an account?{" "}
          <Link className="text-indigo-700" href="/register">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}
