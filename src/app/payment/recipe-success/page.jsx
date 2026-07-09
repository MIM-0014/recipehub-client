"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function RecipePaymentSuccessPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyPayment = async () => {
      try {
        const sessionId = searchParams.get("session_id");

        if (!sessionId) {
          toast.error("Invalid payment session.");
          router.push("/browse-recipes");
          return;
        }

        const res = await fetch(
          "http://localhost:5000/api/recipe-purchase/payment-success",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              sessionId,
            }),
          }
        );

        const data = await res.json();

        if (data.success) {
          toast.success("Recipe purchased successfully!");
        } else {
          toast.error(data.message);
        }
      } catch (error) {
        console.error(error);
        toast.error("Payment verification failed.");
      } finally {
        setLoading(false);
      }
    };

    verifyPayment();
  }, [searchParams, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-xl rounded-xl p-10 text-center max-w-lg">

        <h1 className="text-5xl mb-4">🎉</h1>

        <h2 className="text-3xl font-bold mb-4">
          Recipe Purchased Successfully
        </h2>

        <p className="text-gray-500 mb-8">
          Your recipe has been added to your purchased recipes.
        </p>

        <button
          onClick={() => router.push("/dashboard/purchased-recipes")}
          className="btn btn-warning"
        >
          View Purchased Recipes
        </button>

      </div>
    </div>
  );
}