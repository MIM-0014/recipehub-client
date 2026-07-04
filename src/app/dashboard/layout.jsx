"use client";

import PrivateRoute from "@/components/auth/PrivateRoute";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";

export default function DashboardLayout({ children }) {
  return (
    <PrivateRoute>
      <div className="min-h-screen bg-gray-100">

        <div className="max-w-7xl mx-auto flex">

          {/* Sidebar */}
          <DashboardSidebar />

          {/* Main Content */}
          <div className="flex-1 p-8">
            <main className="flex-1 p-8">
              <DashboardHeader />
              {children}
            </main>
          </div>

        </div>

      </div>
    </PrivateRoute>
  );
}