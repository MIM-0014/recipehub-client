"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ActiveLink({ href, children }) {
  const pathname = usePathname();

  const active = pathname === href;

  return (
    <Link
      href={href}
      className={`font-medium transition-all duration-300 hover:text-orange-500 ${
        active
          ? "text-orange-500"
          : "text-gray-700 dark:text-gray-200"
      }`}
    >
      {children}
    </Link>
  );
}