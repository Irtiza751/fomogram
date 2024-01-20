import { Button, Input } from "@fomogram/ui";
import Link from "next/link";

export default function Login() {
  return (
    <div className="h-full grid place-item-center">
      <form className="border bg-white rounded w-full max-w-md px-6 py-8 m-auto space-y-4">
        <h2 className="text-2xl font-bold mb-5">Login in to your account</h2>
        <Input label="Username or Email" />
        <Input label="Password" type="password" />
        <Link
          href="/forgot"
          className="block text-indigo-800 text-sm text-right hover:underline font-semibold"
        >
          Forgot password?
        </Link>
        <Button className="w-full">Login</Button>
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
