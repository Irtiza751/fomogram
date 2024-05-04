"use client";
import Link from "next/link";
import { Button, Input } from "@fomogram/ui";
import { useFormik } from "formik";
import { InferType, object, string } from "yup";
import { fomo } from "@client/api/fomo";
import { useState } from "react";

const forgotSchema = object({
  email: string().email("Invalid email").required("Email is required"),
});

type Email = InferType<typeof forgotSchema>;

export default function Forgot() {
  const [success, setSuccess] = useState(false);

  const onSubmit = async (email: Email) => {
    try {
      const { data } = await fomo.post("/auth/reset", email);
      if (data) {
        setSuccess(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const { values, errors, touched, handleSubmit, handleChange } = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit,
    validationSchema: forgotSchema,
  });

  return (
    <form
      onSubmit={handleSubmit}
      className="border bg-white rounded w-full max-w-md px-6 py-8 m-auto space-y-4"
    >
      {success ? (
        <div className="bg-green-500 text-white py-2 px-4 rounded-md flex items-center justify-between">
          <p>Please Check you inbox, we have sent a varification email.</p>
        </div>
      ) : null}
      <h2 className="text-2xl font-bold mb-5">Forgot your password?</h2>
      <Input
        name="email"
        value={values.email}
        onChange={handleChange}
        label="Email*"
        placeholder="example@example.com"
      />
      {touched.email && errors.email ? (
        <small className="text-red-700">{errors.email}</small>
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
