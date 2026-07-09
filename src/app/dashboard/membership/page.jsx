"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import PrivateRoute from "@/components/auth/PrivateRoute";
import useAuth from "@/hooks/useAuth";
import { getDashboardStats } from "@/services/recipeApi";
import { createCheckoutSession } from "@/services/userApi";

export default function MembershipPage() {
  const { user } = useAuth();

  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!user?.email) return;

    const loadData = async () => {
      try {
        const data = await getDashboardStats(user.email);
        setStats(data);
      } catch (error) {
        console.error(error);
        toast.error("Failed to load membership information.");
      }
    };

    loadData();
  }, [user]);

  const handleUpgrade = async () => {
    try {
      setLoading(true);

      const data = await createCheckoutSession();

      if (data?.url) {
        window.location.href = data.url;
      } else {
        toast.error("Failed to start Stripe Checkout.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Payment initialization failed.");
    } finally {
      setLoading(false);
    }
  };

  if (!stats) {
    return (
      <div className="text-center py-20">
        Loading...
      </div>
    );
  }

  return (
    <PrivateRoute>
      <div className="max-w-5xl mx-auto px-5 py-10">

        <h1 className="text-4xl font-bold mb-8">
          👑 Premium Membership
        </h1>

        <div className="bg-white rounded-2xl shadow-lg p-10">

          <div className="text-center mb-8">

            <h2 className="text-3xl font-bold">
              {stats.isPremium
                ? "You're a Premium Member 🎉"
                : "Upgrade to Premium"}
            </h2>

            <p className="mt-4 text-gray-500">
              Unlock exclusive features and enjoy the full RecipeHub experience.
            </p>

          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-10">

            <div className="bg-orange-50 rounded-xl p-6">

              <h3 className="text-xl font-bold mb-4">
                Premium Benefits
              </h3>

              <ul className="space-y-3">
                <li>✅ Unlimited Recipe Uploads</li>
                <li>✅ Unlimited Favorites</li>
                <li>✅ Buy Premium Recipes</li>
                <li>✅ Exclusive Premium Recipes</li>
                <li>✅ Early Access to New Features</li>
                <li>✅ Priority Support</li>
              </ul>

            </div>

            <div className="bg-gray-50 rounded-xl p-6 text-center">

              <h3 className="text-xl font-bold mb-4">
                Membership Price
              </h3>

              <h1 className="text-5xl font-bold text-orange-500">
                ৳499
              </h1>

              <p className="mt-2 text-gray-500">
                One Time Payment
              </p>

            </div>

          </div>

          {stats.isPremium ? (
            <button
              disabled
              className="btn btn-success w-full"
            >
              Already Premium
            </button>
          ) : (
            <button
              onClick={handleUpgrade}
              disabled={loading}
              className="btn btn-warning w-full"
            >
              {loading ? "Redirecting..." : "Upgrade Now"}
            </button>
          )}

        </div>

      </div>
    </PrivateRoute>
  );
}