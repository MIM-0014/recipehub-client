"use client";

import Link from "next/link";
import {
  FaArrowLeft,
  FaTachometerAlt,
  FaUtensils,
  FaPlusCircle,
  FaHeart,
  FaShoppingCart,
  FaUser,
  FaShieldAlt,
  FaMoneyCheckAlt,
  FaUsers,
  FaClipboardList,
} from "react-icons/fa";

import ActiveLink from "@/components/shared/ActiveLink";
import useAuth from "@/hooks/useAuth";

export default function DashboardSidebar() {
  const { user, currentUser } = useAuth();

  return (
    <aside className="w-80 min-h-screen bg-white border-r border-gray-200 shadow-sm flex flex-col p-6">

      {/* Logo */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-orange-500">
          RecipeHub
        </h1>
      
      </div>

      {/* User Info */}
      <div className="mb-8">
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
            <h2 className="font-semibold text-sm">
              {user?.displayName || "User"}
            </h2>
            <p className="text-xs text-gray-500 break-all">
              {user?.email}
            </p>
          </div>
        </div>
      </div>

      {/* Menu */}
      <nav className="flex-1">

        <p className="text-xs uppercase tracking-widest text-gray-400 px-3 mb-3">
          Main
        </p>

        <div className="flex flex-col gap-2 mb-8">

          <ActiveLink
            href="/dashboard"
            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-orange-50 hover:text-orange-600 transition"
          >
            <FaTachometerAlt />
            Dashboard
          </ActiveLink>

          <ActiveLink
            href="/dashboard/my-recipes"
            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-orange-50 hover:text-orange-600 transition"
          >
            <FaUtensils />
            My Recipes
          </ActiveLink>

          <ActiveLink
            href="/dashboard/add-recipe"
            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-orange-50 hover:text-orange-600 transition"
          >
            <FaPlusCircle />
            Add Recipe
          </ActiveLink>

          <ActiveLink
            href="/dashboard/favorites"
            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-orange-50 hover:text-orange-600 transition"
          >
            <FaHeart />
            Favorites
          </ActiveLink>

          <ActiveLink
            href="/dashboard/purchased-recipes"
            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-orange-50 hover:text-orange-600 transition"
          >
            <FaShoppingCart />
            Purchased Recipes
          </ActiveLink>

          <ActiveLink
            href="/dashboard/profile"
            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-orange-50 hover:text-orange-600 transition"
          >
            <FaUser />
            Profile
          </ActiveLink>

        </div>

        {currentUser?.role === "admin" && (
          <>
            <p className="text-xs uppercase tracking-widest text-gray-400 px-3 mb-3">
              Admin
            </p>

            <div className="flex flex-col gap-2">

              <ActiveLink
                href="/dashboard/admin"
                className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-orange-50 hover:text-orange-600 transition"
              >
                <FaShieldAlt />
                Admin Panel
              </ActiveLink>

              
             

              <ActiveLink
                href="/dashboard/admin/transactions"
                className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-orange-50 hover:text-orange-600 transition"
              >
                <FaMoneyCheckAlt />
                Transactions
              </ActiveLink>

            </div>
          </>
        )}

      </nav>

      {/* Bottom */}
      <div className="border-t pt-6">

        <Link
          href="/"
          className="flex items-center gap-3 text-gray-600 hover:text-orange-600 transition"
        >
          <FaArrowLeft />
          Back to Home
        </Link>

      </div>

    </aside>
  );
}