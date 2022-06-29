import Link from "next/link";

export default function footer() {
  return (
    <div className="items-center w-full border-grey p-4 pin-b md:grid md:grid-cols-12">
      <p className="dark:text-white text-xs md:col-start-1 md:col-span-2">
        &copy; {new Date().getFullYear()} Shan. All rights reserved.
      </p>
      <Link href="/" passHref>
        <img
          className="cursor-pointer md:object-scale-down md:w-12 md:h-12 hidden md:block md:col-start-12"
          src="/logo.png"
          alt="Logo of Shan"
        />
      </Link>
    </div>
  );
}
