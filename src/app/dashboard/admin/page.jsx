"use client";

import Link from "next/link";
import { FaChartBar, FaUtensils, FaUsers, FaMoneyCheckAlt } from "react-icons/fa";

export default function AdminDashboard() {
  const adminOptions = [
    {
      title: "Manage Recipes",
      description: "Review and manage all recipes",
      icon: FaUtensils,
      href: "/dashboard/admin/manage-recipes",
      color: "from-blue-400 to-blue-600",
    },
    {
      title: "Manage Users",
      description: "Control user roles and status",
      icon: FaUsers,
      href: "/dashboard/admin/manage-users",
      color: "from-green-400 to-green-600",
    },
    {
      title: "Reports",
      description: "View and manage user reports",
      icon: FaChartBar,
      href: "/dashboard/admin/reports",
      color: "from-red-400 to-red-600",
    },
    {
      title: "Transactions",
      description: "Monitor payment transactions",
      icon: FaMoneyCheckAlt,
      href: "/dashboard/admin/transactions",
      color: "from-purple-400 to-purple-600",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-2">Admin Dashboard</h1>
      <p className="text-gray-600 mb-8">Manage your platform</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {adminOptions.map((option) => {
          const IconComponent = option.icon;
          return (
            <Link
              key={option.href}
              href={option.href}
              className={`bg-gradient-to-br ${option.color} p-8 rounded-xl shadow-lg hover:shadow-xl transition transform hover:scale-105`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">
                    {option.title}
                  </h2>
                  <p className="text-white/80">{option.description}</p>
                </div>
                <IconComponent className="text-white text-4xl" />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}