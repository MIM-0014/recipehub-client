"use client";

import { useState } from "react";
import toast from "react-hot-toast";

import { createRecipeCheckout } from "@/services/recipePurchaseApi";

export default function PurchaseButton({
  recipeId,
}) {
  const [loading, setLoading] = useState(false);

  const handlePurchase = async () => {
    try {
      setLoading(true);

      const data =
        await createRecipeCheckout(recipeId);

      if (data.url) {
        window.location.href = data.url;
      } else {
        toast.error("Failed to start payment.");
      }
    } catch (error) {
      console.error(error);

      toast.error("Payment initialization failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handlePurchase}
      disabled={loading}
      className="btn btn-primary w-full"
    >
      {loading
        ? "Redirecting..."
        : "💳 Purchase Recipe"}
    </button>
  );
}