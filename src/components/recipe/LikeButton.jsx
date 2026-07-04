"use client";

import { useState } from "react";
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
    } catch (error) {
      console.log(error);
      alert("Failed to like recipe.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleLike}
      disabled={loading}
      className="flex items-center gap-2 px-5 py-3 bg-red-500 hover:bg-red-600 disabled:bg-gray-400 text-white rounded-xl transition"
    >
      <FaHeart />

      {loading ? "Liking..." : `Like (${likes})`}
    </button>
  );
}