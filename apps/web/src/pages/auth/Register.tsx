import { Link } from "react-router-dom";
import { AuthLayout } from "../../components/AuthLayout";
import { Button, Input } from "@fomogram/ui";

export function Register() {
  return (
    <AuthLayout>
      <div className="h-full grid place-item-center">
        <form className="border bg-white rounded w-full max-w-md px-6 py-8 m-auto space-y-4">
          <h2 className="text-2xl font-bold mb-5">Register your account</h2>
          <Input label="Email" type="email" />
          <Input label="Username" />
          <Input label="Password" type="password" />
          <Button>Register</Button>
          <p className="text-center">
            Already have an account?{" "}
            <Link className="text-indigo-700" to="/login">
              Login
            </Link>
          </p>
        </form>
      </div>
    </AuthLayout>
  );
}
