"use client";

import Link from "next/link";
import {
  FaHome,
  FaArrowLeft,
  FaTachometerAlt,
  FaUtensils,
  FaPlusCircle,
  FaHeart,
  FaShoppingCart,
  FaUser,
} from "react-icons/fa";


import ActiveLink from "@/components/shared/ActiveLink";
import useAuth from "@/hooks/useAuth";
import { FaShieldAlt } from "react-icons/fa";

export default function DashboardSidebar() {
const { user, currentUser } = useAuth();
console.log("Sidebar currentUser:", currentUser);


console.log("Firebase User:", user);
console.log("Mongo User:", currentUser);
console.log("Sidebar currentUser:", currentUser);

  return (
    <aside className="w-72 min-h-screen bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 shadow-sm p-6 sticky top-0">

      {/* Logo */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-orange-500">
          RecipeHub
        </h1>

        <p className="text-sm text-gray-500">
          User Dashboard
        </p>
      </div>

      {/* User Info */}
      <div className="mb-10">

        <div className="flex items-center gap-3">

          {user?.photoURL ? (
            <img
              src={user.photoURL}
              alt={user.displayName}
              className="w-14 h-14 rounded-full object-cover border-2 border-orange-500"
            />
          ) : (
            <div className="w-14 h-14 rounded-full bg-orange-500 text-white flex items-center justify-center text-2xl font-bold">
              {user?.displayName?.charAt(0)?.toUpperCase() || "U"}
            </div>
          )}

          <div>
            <h2 className="font-semibold">
              {user?.displayName || "User"}
            </h2>

            <p className="text-sm text-gray-500 break-all">
              {user?.email}
            </p>
          </div>

        </div>

      </div>

      {/* Menu */}
      <nav className="flex flex-col gap-2">

        <ActiveLink
          href="/dashboard"
          className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-orange-100 dark:hover:bg-gray-800 transition"
        >
          <FaTachometerAlt />
          Dashboard
        </ActiveLink>

        {currentUser?.role === "admin" && (
  <ActiveLink
    href="/dashboard/admin"
    className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-orange-100 transition"
  >
    <FaShieldAlt />
    Admin Panel
  </ActiveLink>
)}

        <ActiveLink
          href="/dashboard/my-recipes"
          className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-orange-100 dark:hover:bg-gray-800 transition"
        >
          <FaUtensils />
          My Recipes
        </ActiveLink>

        <ActiveLink
          href="/dashboard/add-recipe"
          className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-orange-100 dark:hover:bg-gray-800 transition"
        >
          <FaPlusCircle />
          Add Recipe
        </ActiveLink>

        <ActiveLink
          href="/dashboard/favorites"
          className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-orange-100 dark:hover:bg-gray-800 transition"
        >
          <FaHeart />
          Favorites
        </ActiveLink>

        <ActiveLink
          href="/dashboard/purchased-recipes"
          className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-orange-100 dark:hover:bg-gray-800 transition"
        >
          <FaShoppingCart />
          Purchased Recipes
        </ActiveLink>

        <ActiveLink
          href="/dashboard/profile"
          className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-orange-100 dark:hover:bg-gray-800 transition"
        >
          <FaUser />
          Profile
        </ActiveLink>
        {currentUser?.role === "admin" && (
  <ActiveLink
    href="/dashboard/admin"
    className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-orange-100 transition"
  >
    👑 Admin Panel
  </ActiveLink>
)}

      </nav>

      {/* Bottom */}
      <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">

        <Link
          href="/"
          className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-orange-500 transition"
        >
          <FaArrowLeft />
          Back to Home
        </Link>

      </div>

    </aside>
  );
}