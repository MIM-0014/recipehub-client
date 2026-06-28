"use client";

import Link from "next/link";
import { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaUserCircle,
} from "react-icons/fa";

import Logo from "./Logo";
import ActiveLink from "./ActiveLink";
import ThemeToggle from "./ThemeToggle";
import Container from "./Container";

import useAuth from "@/hooks/useAuth";

export default function Navbar() {
  const { user, logout } = useAuth();

  const [open, setOpen] = useState(false);

  const handleLogout = async () => {
  try {
    await logout();
    setOpen(false);
  } catch (error) {
    console.error(error);
  }
};

  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <Container>
        <nav className="h-20 flex items-center justify-between">

          <Logo />

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <ActiveLink href="/">Home</ActiveLink>

            <ActiveLink href="/browse-recipes">
              Browse Recipes
            </ActiveLink>

            {user && (
              <ActiveLink href="/dashboard">
                Dashboard
              </ActiveLink>
            )}
          </div>

          {/* Desktop Right */}
          <div className="hidden lg:flex items-center gap-4">

            <ThemeToggle />

            {!user ? (
              <>
                <Link
                  href="/login"
                  className="font-medium hover:text-orange-500 transition"
                >
                  Login
                </Link>

                <Link
                  href="/register"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-lg transition"
                >
                  Register
                </Link>
              </>
            ) : (
              <>
                <div
                  title={user.displayName || ""}
                  className="flex items-center gap-3"
                >
                  {user.photoURL ? (
                    <img
                      src={user.photoURL}
                      alt="user"
                      className="w-11 h-11 rounded-full border-2 border-orange-500 object-cover"
                    />
                  ) : (
                    <FaUserCircle
                      className="text-4xl text-orange-500"
                    />
                  )}

                  <button
  onClick={handleLogout}
  className="bg-orange-500 hover:bg-orange-600 hover:scale-105 active:scale-95 transition-all duration-300 text-white px-5 py-2 rounded-lg shadow-md hover:shadow-lg"
>
  Logout
</button>
                </div>
              </>
            )}
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-2xl"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>

        </nav>
      </Container>

      {/* Mobile Menu */}

      {open && (
        <div className="lg:hidden bg-white border-t">

          <Container>

            <div className="py-6 flex flex-col gap-5">

              <div onClick={closeMenu}>
                <ActiveLink href="/">Home</ActiveLink>
              </div>

              <div onClick={closeMenu}>
                <ActiveLink href="/browse-recipes">
                  Browse Recipes
                </ActiveLink>
              </div>

              {user && (
                <div onClick={closeMenu}>
                  <ActiveLink href="/dashboard">
                    Dashboard
                  </ActiveLink>
                </div>
              )}

              <ThemeToggle />

              {!user ? (
                <>
                  <Link
                    href="/login"
                    onClick={closeMenu}
                  >
                    Login
                  </Link>

                  <Link
                    href="/register"
                    onClick={closeMenu}
                    className="bg-orange-500 text-white rounded-lg py-3 text-center"
                  >
                    Register
                  </Link>
                </>
              ) : (
               <button
  onClick={handleLogout}
  className="bg-orange-500 hover:bg-orange-600 hover:scale-[1.02] transition-all duration-300 text-white rounded-lg py-3 shadow-md"
>
  Logout
</button>
              )}

            </div>

          </Container>
        </div>
      )}
    </header>
  );
}