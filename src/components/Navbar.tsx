"use client";
import { Bug } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { clsx } from "clsx";

type NavLinks = {
  label: string;
  href: string;
};

export default function Navbar() {
  const currentPath = usePathname();
  const links: NavLinks[] = [
    {
      label: "Dashboard",
      href: "/",
    },
    {
      label: "Issues",
      href: "/issues",
    },
  ];
  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <Bug size={24} />
      </Link>
      <ul className="flex space-x-6 font-bold">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className={clsx({
                "text-zinc-900": link.href === currentPath,
                "text-zinc-500": link.href !== currentPath,
                "hover:text-zinc-800 transition-colors": true,
              })}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
