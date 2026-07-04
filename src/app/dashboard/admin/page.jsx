"use client";

import { useEffect, useState } from "react";

import {
  FaUsers,
  FaUtensils,
  FaFlag,
  FaHeart,
  FaCrown,
  FaStar,
} from "react-icons/fa";

import AdminRoute from "@/components/auth/AdminRoute";

import { getAdminStats } from "@/services/adminApi";

export default function AdminDashboard() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    async function load() {
      try {
        const data = await getAdminStats();
        setStats(data);
      } catch (error) {
        console.log(error);
      }
    }

    load();
  }, []);

  if (!stats) {
    return (
      <div className="text-center py-20">
        Loading...
      </div>
    );
  }

  const cards = [
    {
      title: "Users",
      value: stats.totalUsers,
      icon: <FaUsers size={35} />,
      color: "bg-blue-500",
    },
    {
      title: "Recipes",
      value: stats.totalRecipes,
      icon: <FaUtensils size={35} />,
      color: "bg-green-500",
    },
    {
      title: "Reports",
      value: stats.totalReports,
      icon: <FaFlag size={35} />,
      color: "bg-red-500",
    },
    {
      title: "Premium Users",
      value: stats.premiumUsers,
      icon: <FaCrown size={35} />,
      color: "bg-yellow-500",
    },
    {
      title: "Favorites",
      value: stats.totalFavorites,
      icon: <FaStar size={35} />,
      color: "bg-purple-500",
    },
    {
      title: "Recipe Likes",
      value: stats.totalLikes,
      icon: <FaHeart size={35} />,
      color: "bg-pink-500",
    },
  ];

  return (
    <AdminRoute>

      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold mb-10">
          📊 Admin Analytics
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {cards.map((card) => (

            <div
              key={card.title}
              className={`${card.color} rounded-2xl text-white p-8 shadow-lg`}
            >
              <div className="flex justify-between items-center">

                <div>

                  <p className="text-lg">
                    {card.title}
                  </p>

                  <h2 className="text-5xl font-bold mt-3">
                    {card.value}
                  </h2>

                </div>

                {card.icon}

              </div>

            </div>

          ))}

        </div>

      </div>

    </AdminRoute>
  );
}