"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import useAuth from "@/hooks/useAuth";

export default function PaymentSuccessPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { user } = useAuth();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyPayment = async () => {
      try {
        const sessionId = searchParams.get("session_id");

        if (!sessionId) {
          toast.error("Invalid payment session.");
          router.push("/dashboard/membership");
          return;
        }

        const res = await fetch(
          `http://localhost:5000/api/premium/payment-success`,
          {
            method: "POST",
            credentials: "include",
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
    await refreshCurrentUser();

    toast.success("Premium Membership Activated!");
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
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen flex justify-center items-center">

      <div className="bg-white shadow-xl rounded-xl p-10 text-center max-w-xl">

        <h1 className="text-5xl mb-5">
          🎉
        </h1>

        <h2 className="text-3xl font-bold mb-4">
          Payment Successful
        </h2>

        <p className="text-gray-500 mb-8">
          Your Premium Membership has been activated.
        </p>

        <button
          onClick={() => router.push("/dashboard")}
          className="btn btn-warning"
        >
          Go To Dashboard
        </button>

      </div>

    </div>
  );
}