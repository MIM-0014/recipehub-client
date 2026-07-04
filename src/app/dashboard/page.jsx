"use client";

import { useEffect, useState } from "react";


import useAuth from "@/hooks/useAuth";
import { getDashboardStats } from "@/services/recipeApi";

export default function DashboardPage() {
  const { user } = useAuth();

  const [stats, setStats] = useState(null);

  useEffect(() => {
    if (!user?.email) return;

    async function loadStats() {
      try {
        const data = await getDashboardStats(user.email);
        setStats(data);
      } catch (error) {
        console.log(error);
      }
    }

    loadStats();
  }, [user]);

  if (!stats) {
    return (
      <div className="text-center py-20">
        Loading...
      </div>
    );
  }

  return (
    <div>
      <div className="max-w-7xl mx-auto px-5 py-10">
        <h1 className="text-4xl font-bold mb-10">
          Dashboard Overview
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white shadow rounded-xl p-6 text-center">
            <h2 className="text-gray-500">
              Total Recipes
            </h2>

            <p className="text-5xl font-bold mt-3">
              🍲 {stats.totalRecipes}
            </p>
          </div>

          <div className="bg-white shadow rounded-xl p-6 text-center">
            <h2 className="text-gray-500">
              Total Likes
            </h2>

            <p className="text-5xl font-bold mt-3">
              ❤️ {stats.totalLikes}
            </p>
          </div>

          <div className="bg-white shadow rounded-xl p-6 text-center">
            <h2 className="text-gray-500">
              Favorites
            </h2>

            <p className="text-5xl font-bold mt-3">
              ⭐ {stats.favorites}
            </p>
          </div>

          <div className="bg-white shadow rounded-xl p-6 text-center">
            <h2 className="text-gray-500">
              Premium
            </h2>

            <p className="text-3xl font-bold mt-5">
              {stats.isPremium ? "👑 Yes" : "❌ No"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}