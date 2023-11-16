"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import { AiFillBug } from "react-icons/ai";

const NavBar = () => {
  const currentpath = usePathname();
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "issues", href: "/issues" },
  ];
  return (
    <nav className="flex space-x-6 border-b mb-5 p-5 h-14">
      <Link href="/">
        <AiFillBug />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={classNames({
              "text-zinc-900": link.href === currentpath,
              "text-zinc-500": link.href !== currentpath,
              "hover:text-zinc-800 transition-colors": true,
            })}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
