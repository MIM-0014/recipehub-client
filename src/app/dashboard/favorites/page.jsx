"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";


import useAuth from "@/hooks/useAuth";

import {
  getFavorites,
  getRecipe,
  deleteFavorite,
} from "@/services/recipeApi";

export default function FavoritesPage() {
  const { user, currentUser } = useAuth();

  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;

    async function loadFavorites() {
      try {
       const favoriteDocs = await getFavorites();

        const recipes = await Promise.all(
          favoriteDocs.map(async (fav) => {
            const recipe = await getRecipe(fav.recipeId);

            return {
              favoriteId: fav._id,
              ...recipe,
            };
          })
        );

        setFavorites(recipes);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    loadFavorites();
  }, [user]);

  const handleRemove = async (favoriteId) => {
    const confirmDelete = confirm(
      "Remove this recipe from favorites?"
    );

    if (!confirmDelete) return;

    try {
      const result = await deleteFavorite(favoriteId);

      if (result.deletedCount > 0) {
        alert("Recipe removed successfully!");

        setFavorites((prev) =>
          prev.filter(
            (recipe) => recipe.favoriteId !== favoriteId
          )
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return (
      <div>
        <div className="flex justify-center items-center h-[60vh]">
          <span className="loading loading-spinner loading-lg text-orange-500"></span>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="max-w-7xl mx-auto px-5 py-10">

        <h1 className="text-4xl font-bold mb-10">
          ❤️ My Favorite Recipes
        </h1>

        {favorites.length === 0 ? (
          <div className="bg-base-200 rounded-2xl p-16 text-center">

            <h2 className="text-3xl font-bold">
              No Favorites Yet
            </h2>

            <p className="mt-4 text-gray-500">
              Start adding recipes to your favorites.
            </p>

            <Link
              href="/browse-recipes"
              className="btn btn-warning mt-8"
            >
              Browse Recipes
            </Link>

          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {favorites.map((recipe) => (

              <div
                key={recipe.favoriteId}
                className="bg-base-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl duration-300"
              >

                <div className="relative h-56">

                  <Image
                    src={recipe.recipeImage}
                    alt={recipe.recipeName}
                    fill
                    className="object-cover"
                  />

                </div>

                <div className="p-6">

                  <h2 className="text-2xl font-bold mb-2">
                    {recipe.recipeName}
                  </h2>

                  <div className="space-y-2 text-sm">

                    <p>
                      🍽 <strong>Category:</strong>{" "}
                      {recipe.category}
                    </p>

                    <p>
                      🌍 <strong>Cuisine:</strong>{" "}
                      {recipe.cuisineType}
                    </p>

                    <p>
                      ⭐ <strong>Difficulty:</strong>{" "}
                      {recipe.difficultyLevel}
                    </p>

                    <p>
                      ⏱ <strong>Preparation:</strong>{" "}
                      {recipe.preparationTime}
                    </p>

                    <p>
                      ❤️ <strong>Likes:</strong>{" "}
                      {recipe.likesCount || 0}
                    </p>

                  </div>

                  <div className="flex gap-3 mt-6">

                    <Link
                      href={`/recipe/${recipe._id}`}
                      className="btn btn-warning flex-1"
                    >
                      View Details
                    </Link>

                    <button
                      onClick={() =>
                        handleRemove(recipe.favoriteId)
                      }
                      className="btn btn-error flex-1"
                    >
                      Remove
                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>
        )}
      </div>
    </div>
  );
}