"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ActiveLink({
  href,
  children,
  className = "",
}) {
  const pathname = usePathname();

  const active = pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));

  return (
    <Link
      href={href}
      className={`
        ${className}
        transition-all duration-300
        ${
          active
            ? "bg-orange-500 text-white shadow-md"
            : "text-gray-700 dark:text-gray-200 hover:bg-orange-100 dark:hover:bg-gray-800 hover:text-orange-500"
        }
      `}
    >
      {children}
    </Link>
  );
}