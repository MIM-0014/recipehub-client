"use client";

import { addFavorite } from "@/services/recipeApi";
import useAuth from "@/hooks/useAuth";

export default function FavoriteButton({ recipeId }) {
  const { user } = useAuth();

  const handleFavorite = async () => {
    if (!user) {
      alert("Please login first.");
      return;
    }

    try {
      await addFavorite({
        recipeId,
        userEmail: user.email,
      });

      alert("Recipe added to favorites.");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <button
      onClick={handleFavorite}
      className="px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white rounded-xl"
    >
      ❤️ Add to Favorites
    </button>
  );
}