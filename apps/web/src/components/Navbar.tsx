import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="border-b py-3">
      <div className="container flex justify-between items-center">
        <Link to={"/"}>
          <img src="public/logo.svg" alt="" />
        </Link>
        <ul className="flex gap-3 text-sm">
          <li>
            <Link
              className="inline-block hover:bg-slate-100 px-3 py-1.5 rounded"
              to="/login"
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              className="inline-block bg-indigo-700 text-white px-3 py-1.5 rounded"
              to="/register"
            >
              Register
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
