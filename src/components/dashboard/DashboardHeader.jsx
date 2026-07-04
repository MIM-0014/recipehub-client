"use client";

import useAuth from "@/hooks/useAuth";

export default function DashboardHeader() {
  const { user, currentUser } = useAuth();

  const getBadge = () => {
    if (currentUser?.role === "admin") {
      return {
        text: "👑 Admin",
        className: "bg-red-100 text-red-600",
      };
    }

    if (currentUser?.isPremium) {
      return {
        text: "⭐ Premium Member",
        className: "bg-yellow-100 text-yellow-700",
      };
    }

    return {
      text: "🙋 Member",
      className: "bg-orange-100 text-orange-600",
    };
  };

  const badge = getBadge();

  return (
    <div className="bg-white rounded-xl shadow-sm border px-8 py-5 mb-8 flex items-center justify-between">
      {/* Left */}
      <div>
        <h1 className="text-3xl font-bold">
          Welcome Back 👋
        </h1>

        <p className="text-gray-500 mt-1">
          {user?.displayName || currentUser?.name || "RecipeHub User"}
        </p>
      </div>

      {/* Right */}
      <div className="text-right">
        <p className="font-semibold">
          {user?.email}
        </p>

        <span
          className={`inline-block mt-2 px-3 py-1 rounded-full text-sm font-medium ${badge.className}`}
        >
          {badge.text}
        </span>
      </div>
    </div>
  );
}