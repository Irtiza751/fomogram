"use client";
import Link from "next/link";
import { Button, Input, Spinner } from "@fomogram/ui";
import { useFormik } from "formik";
import { InferType, object, string } from "yup";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, XCircle } from "react-feather";
import { useState } from "react";
import { useRequest } from "@client/hooks/useRequest";

const loginFormSchema = object({
  email: string().email("Invalid email").required("Email is required"),
  password: string().required("Password is required"),
});

type Credentials = InferType<typeof loginFormSchema>;

export default function Login() {
  const [show, setShow] = useState(false);
  const [error, showError] = useState<string>("");

  const { isLoading, post } = useRequest({
    endpoint: "/auth/login",
    onSuccess(data) {
      console.log(data);
      router.push("/");
    },
    onError(error) {
      const { response } = error;
      if (response?.status === 422) {
        showError(response.data.message);
      }
    },
  });

  const router = useRouter();

  const { values, errors, touched, handleSubmit, handleChange } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (creds: Credentials) => {
      post(creds);
    },
    validationSchema: loginFormSchema,
  });

  console.log({ isLoading });

  return (
    <form
      onSubmit={handleSubmit}
      className="border bg-white rounded w-full max-w-md px-6 py-8 m-auto space-y-4"
    >
      {/* error */}
      {error ? (
        <div className="bg-red-500 text-white py-2 px-4 rounded-md flex items-center justify-between">
          <span>{error}</span>
          <button onClick={() => showError("")}>
            <XCircle size={20} />
          </button>
        </div>
      ) : null}

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
      <Button type="submit" className="w-full space-x-2">
        {isLoading && <Spinner />}
        <span>Login</span>
      </Button>
      <p className="text-center">
        Don't have an account?{" "}
        <Link className="text-indigo-700" href="/register">
          Register
        </Link>
      </p>
    </form>
  );
}
