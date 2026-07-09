"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { addFavorite } from "@/services/recipeApi";
import useAuth from "@/hooks/useAuth";

export default function FavoriteButton({ recipeId }) {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const handleFavorite = async () => {
    if (!user) {
      toast.error("Please login first.");
      return;
    }

    setIsLoading(true);

    try {
      await addFavorite({
        recipeId,
        userEmail: user.email,
      });

      toast.success("Recipe added to favorites!");
    } catch (error) {
      // Handle duplicate favorite gracefully
      if (error.message?.includes("already added")) {
        toast("This recipe is already in your favorites.", {
          icon: "⭐",
        });
      } else {
        toast.error(error.message || "Failed to add favorite");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleFavorite}
      disabled={isLoading}
      className="px-6 py-3 bg-pink-500 hover:bg-pink-600 disabled:bg-pink-400 text-white rounded-xl transition disabled:cursor-not-allowed"
    >
      {isLoading ? "⏳ Adding..." : "❤️ Add to Favorites"}
    </button>
  );
}