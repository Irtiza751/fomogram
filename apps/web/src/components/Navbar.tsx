import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="border-b py-3 fixed w-full z-10 backdrop-blur-md">
      <div className="container flex justify-center items-center">
        <Link to={"/"}>
          <img src="public/logo.svg" alt="" />
        </Link>
      </div>
    </nav>
  );
}
