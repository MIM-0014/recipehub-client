"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import useAuth from "@/hooks/useAuth";

export default function PremiumRoute({ children }) {
  const router = useRouter();

  const { loading, currentUser } = useAuth();

  useEffect(() => {
    if (loading) return;

    if (!currentUser?.isPremium) {
      router.replace("/premium");
    }
  }, [loading, currentUser, router]);

  if (loading || !currentUser) {
    return (
      <div className="text-center py-20">
        Loading...
      </div>
    );
  }

  return children;
}