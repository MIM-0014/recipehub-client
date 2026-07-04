"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import useAuth from "@/hooks/useAuth";

export default function AdminRoute({ children }) {
  const { loading, currentUser } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && currentUser?.role !== "admin") {
      router.replace("/");
    }
  }, [loading, currentUser, router]);

  if (loading) {
    return (
      <div className="text-center py-20">
        Loading...
      </div>
    );
  }

  if (currentUser?.role !== "admin") {
    return null;
  }

  return children;
}