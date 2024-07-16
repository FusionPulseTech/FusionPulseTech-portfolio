import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gray-800 p-4 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center w-1/5">
        <Link href="/">
          <div className="bg-white rounded-full h-12 w-12 flex items-center justify-center">
            <a className="block text-gray-800 font-bold text-lg">FPT</a>
          </div>
        </Link>
        <h1 className="text-white text-xl ml-2"></h1>
      </div>

      {/* Menu */}
      <nav className="flex items-center w-4/5 justify-end">
        <ul className="flex justify-between space-x-4 w-full">
          <li className="text-white hover:text-gray-400">
            <Link href="/">Home</Link>
          </li>
          <li className="text-white hover:text-gray-400">
            <Link href="/service">Service</Link>
          </li>
          <li className="text-white hover:text-gray-400">
            <Link href="/about">About Us</Link>
          </li>
          <li className="text-white hover:text-gray-400">
            <Link href="/contact">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
