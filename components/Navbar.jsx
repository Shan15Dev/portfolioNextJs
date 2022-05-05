import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Navbar({ session }) {
  const [isOpen, setIsOpen] = useState(false);
  const [blur, setBlur] = useState("");

  const handleMobileMenu = (e) => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (navigator.userAgent.indexOf("Firefox") != -1) {
      setBlur("backdrop-blur-none bg-white");
    } else {
      setBlur("backdrop-blur-md");
    }
  }, [session]);

  return (
    <div
      className={`sticky top-0.5 ${blur} dark:backdrop-blur-none dark:bg-slate-700 md:dark:bg-slate-700 dark:top-0 dark:text-white md:dark:top-0 md:top-0 md:bg-slate-100`}
    >
      <div className="md:grid md:grid-cols-2 place-items-center shadow-lg	mb2">
        <div className="grid grid-cols-4 place-items-center md:grid-cols-3">
          <Link href="/" passHref>
            <img
              className="cursor-pointer md:object-scale-down md:w-12 md:h-50 h-50 my-2"
              src="/logo.png"
              alt="Logo of Shan"
            />
          </Link>
        </div>

        <ul
          className={`md:flex ${
            isOpen ? "block" : "hidden"
          } text-center place-items-center md:align-middle`}
        >
          <Link
            href="/"
            className="block text-sm px-2 py-4 text-white  font-semibold md:mr-4"
            passHref
          >
            <li className="active border-y-2 cursor-pointer md:border-none md:mr-4">
              Home
            </li>
          </Link>
          <Link
            href="/projects"
            className="block text-sm px-2 py-4  transition duration-300 mr-4"
            passHref
          >
            <li className="border-b-2  cursor-pointer md:border-none md:mr-4">
              Projects
            </li>
          </Link>
          <Link
            href="/about"
            className="block text-sm px-2 py-4  transition duration-300 mr-4"
            passHref
          >
            <li className="border-b-2 cursor-pointer md:border-none md:mr-4">
              About Me
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
