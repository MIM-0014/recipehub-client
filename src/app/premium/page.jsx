"use client";

import Link from "next/link";
import Container from "@/components/shared/Container";
import useAuth from "@/hooks/useAuth";

export default function PremiumPage() {
  const { currentUser } = useAuth();

  return (
    <Container className="py-16">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-5xl font-bold text-center">
          Upgrade to Premium
        </h1>

        <p className="text-center text-gray-500 mt-4 mb-12">
          Unlock unlimited recipes and premium features.
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Free Plan */}
          <div className="border rounded-2xl p-8 shadow">

            <h2 className="text-3xl font-bold mb-5">
              Free
            </h2>

            <ul className="space-y-3">
              <li>✅ Add up to 2 recipes</li>
              <li>✅ Browse recipes</li>
              <li>✅ Like recipes</li>
              <li>✅ Save favorites</li>
            </ul>

          </div>

          {/* Premium Plan */}
          <div className="border-2 border-orange-500 rounded-2xl p-8 shadow-lg">

            <h2 className="text-3xl font-bold text-orange-500 mb-5">
              Premium
            </h2>

            <ul className="space-y-3">
              <li>✅ Unlimited recipes</li>
              <li>✅ Premium badge</li>
              <li>✅ Future AI recipe generator</li>
              <li>✅ Priority support</li>
            </ul>

            <button
              className="btn btn-warning w-full mt-8"
            >
              Upgrade Now
            </button>

          </div>

        </div>

        {currentUser?.isPremium && (
          <div className="mt-10 text-center">

            <p className="text-green-600 text-xl font-bold">
              👑 You are already a Premium Member
            </p>

            <Link
              href="/dashboard"
              className="btn btn-primary mt-5"
            >
              Go to Dashboard
            </Link>

          </div>
        )}

      </div>
    </Container>
  );
}