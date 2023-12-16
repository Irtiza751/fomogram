export function Navbar() {
  return (
    <nav className="border-b py-3">
      <div className="container flex justify-between items-center">
        <h4 className="text-2xl font-bold">Fomogram</h4>
        <ul className="flex gap-3">
          <li>
            <a
              className="inline-block hover:bg-slate-100 px-3 py-1.5 rounded"
              href="#"
            >
              Login
            </a>
          </li>
          <li>
            <a
              className="inline-block bg-indigo-500 text-white px-3 py-1.5 rounded"
              href="#"
            >
              Register
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
