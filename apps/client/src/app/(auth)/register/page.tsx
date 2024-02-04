"use client";
import Link from "next/link";
import { Button, Input } from "@fomogram/ui";
import { useFormik } from "formik";
import { InferType, object, string } from "yup";
import { fomo } from "@client/api/fomo";

export default function Register() {
  const registerSchema = object({
    email: string().email("Invalid email").required("Email is required"),
    username: string().required("Username is required"),
    password: string().min(6).required("Password is required"),
  });

  const onSubmit = async (values: InferType<typeof registerSchema>) => {
    console.log(values);
    const { data } = await fomo.post("/auth/login", values);
    console.log("register", data);
  };

  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      username: "",
      password: "",
    },
    validationSchema: registerSchema,
    onSubmit,
  });

  return (
    <div className="h-full grid place-item-center">
      <form
        onSubmit={handleSubmit}
        className="border bg-white rounded w-full max-w-md px-6 py-8 m-auto space-y-4"
      >
        <h2 className="text-2xl font-bold mb-5">Register your account</h2>
        <Input
          value={values.email}
          onChange={handleChange}
          name="email"
          label="Email"
          type="email"
        />
        {touched.email && errors.email ? (
          <small className="text-red-700">{errors.email}</small>
        ) : null}
        <Input
          value={values.username}
          onChange={handleChange}
          name="username"
          label="Username"
          type="text"
        />
        {touched.username && errors.username ? (
          <small className="text-red-700">{errors.username}</small>
        ) : null}
        <Input
          value={values.password}
          onChange={handleChange}
          name="password"
          label="Password"
          type="password"
        />
        {touched.password && errors.password ? (
          <small className="text-red-700">{errors.password}</small>
        ) : null}
        <Button type="submit" className="w-full">
          Register
        </Button>
        <p className="text-center">
          Already have an account?{" "}
          <Link className="text-indigo-700" href="/login">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}
