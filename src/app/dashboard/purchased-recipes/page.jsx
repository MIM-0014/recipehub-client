"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";

import PrivateRoute from "@/components/auth/PrivateRoute";
import { getPurchasedRecipes } from "@/services/recipePurchaseApi";

export default function PurchasedRecipesPage() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPurchasedRecipes = async () => {
      try {
        const data = await getPurchasedRecipes();
        setRecipes(data);
      } catch (error) {
        console.error(error);
        toast.error("Failed to load purchased recipes.");
      } finally {
        setLoading(false);
      }
    };

    loadPurchasedRecipes();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-20">
        Loading...
      </div>
    );
  }

  return (
    <PrivateRoute>
      <div className="max-w-7xl mx-auto px-5 py-10">

        <h1 className="text-4xl font-bold mb-10">
          🛒 Purchased Recipes
        </h1>

        {recipes.length === 0 ? (
          <div className="bg-base-100 rounded-2xl shadow-lg p-16 text-center">

            <div className="text-7xl mb-6">
              🍽️
            </div>

            <h2 className="text-3xl font-bold">
              No Purchased Recipes
            </h2>

            <p className="mt-4 text-gray-500 max-w-xl mx-auto">
              You haven't purchased any premium recipes yet.
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

            {recipes.map((recipe) => (
              <div
                key={recipe._id}
                className="bg-base-100 rounded-2xl shadow-lg overflow-hidden"
              >

                <Image
                  src={recipe.recipeImage}
                  alt={recipe.recipeName}
                  width={500}
                  height={300}
                  className="w-full h-56 object-cover"
                />

                <div className="p-6">

                  <h2 className="text-2xl font-bold">
                    {recipe.recipeName}
                  </h2>

                  <div className="flex flex-wrap gap-2 mt-4">

                    <span className="badge badge-warning">
                      {recipe.category}
                    </span>

                    <span className="badge badge-info">
                      {recipe.cuisineType}
                    </span>

                  </div>

                  <p className="mt-4 text-gray-500 line-clamp-3">
                    {recipe.instructions}
                  </p>

                  <Link
                    href={`/recipes/${recipe._id}`}
                    className="btn btn-warning w-full mt-6"
                  >
                    View Recipe
                  </Link>

                </div>

              </div>
            ))}

          </div>
        )}

      </div>
    </PrivateRoute>
  );
}