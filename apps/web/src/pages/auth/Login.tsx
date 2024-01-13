import { Button, Input } from "@fomogram/ui";
import { AuthLayout } from "../../components/AuthLayout";
import { Link } from "react-router-dom";

export function Login() {
  return (
    <AuthLayout>
      <div className="h-full grid place-item-center">
        <form className="border bg-white rounded w-full max-w-md px-6 py-8 m-auto space-y-4">
          <h2 className="text-2xl font-bold mb-5">Login in to your account</h2>
          <Input label="Username or Email" />
          <Input label="Password" type="password" />
          <Button className="w-full">Login</Button>
          <p className="text-center">
            Don't have an account?{" "}
            <Link className="text-indigo-700" to="/register">
              Register
            </Link>
          </p>
        </form>
      </div>
    </AuthLayout>
  );
}
