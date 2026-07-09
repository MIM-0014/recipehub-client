"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import StatsCard from "@/components/dashboard/StatsCard";

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
        console.error(error);
        toast.error("Failed to load dashboard stats");
        // Set default stats so page doesn't stay in loading state
        setStats({ totalRecipes: 0, totalLikes: 0, favorites: 0, isPremium: false });
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
        
      

        <div className="mb-10">

  <h1 className="text-4xl font-bold">
    Dashboard Overview
  </h1>

  <p className="text-gray-500 mt-2">
    Track your recipes, favorites, likes, and membership status.
  </p>

</div>

       <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

  <StatsCard
    title="Total Recipes"
    value={stats.totalRecipes}
    icon="🍳"
    color="bg-orange-100"
    subtitle="Recipes you've shared"
  />

  <StatsCard
    title="Total Likes"
    value={stats.totalLikes}
    icon="❤️"
    color="bg-red-100"
    subtitle="Received from users"
  />

  <StatsCard
    title="Favorites"
    value={stats.favorites}
    icon="⭐"
    color="bg-yellow-100"
    subtitle="Saved recipes"
  />

  <StatsCard
    title="Membership"
    value={stats.isPremium ? "Premium" : "Free"}
    icon={stats.isPremium ? "👑" : "🔓"}
    color={stats.isPremium ? "bg-purple-100" : "bg-gray-100"}
    subtitle={
      stats.isPremium
        ? "Unlimited access"
        : "Upgrade anytime"
    }
  />
 

</div>
      </div>
    </div>
  );
}