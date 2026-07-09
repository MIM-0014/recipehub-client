"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { FaHeart } from "react-icons/fa";
import { likeRecipe } from "@/services/recipeApi";

export default function LikeButton({ recipeId, initialLikes }) {
  const [likes, setLikes] = useState(initialLikes);
  const [loading, setLoading] = useState(false);

  const handleLike = async () => {
    try {
      setLoading(true);

      await likeRecipe(recipeId);

      setLikes((prev) => prev + 1);
      toast.success("Recipe liked!");
    } catch (error) {
      if (error.message?.includes("already")) {
        toast("You've already liked this recipe.", {
          icon: "❤️",
        });
      } else {
        toast.error(error.message || "Failed to like recipe.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleLike}
      disabled={loading}
      className="flex items-center gap-2 px-5 py-3 bg-red-500 hover:bg-red-600 disabled:bg-gray-400 text-white rounded-xl transition disabled:cursor-not-allowed"
    >
      <FaHeart />

      {loading ? "Liking..." : `Like (${likes})`}
    </button>
  );
}