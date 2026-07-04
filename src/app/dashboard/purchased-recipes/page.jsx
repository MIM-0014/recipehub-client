"use client";

import Link from "next/link";


export default function PurchasedRecipes() {
  // Future API Data
  const purchasedRecipes = [];

  return (
    <div>
      <div className="max-w-7xl mx-auto px-5 py-10">

        <h1 className="text-4xl font-bold mb-10">
          🛒 Purchased Recipes
        </h1>

        {purchasedRecipes.length === 0 ? (
          <div className="bg-base-100 rounded-2xl shadow-lg p-16 text-center">

            <div className="text-7xl mb-6">
              🍽️
            </div>

            <h2 className="text-3xl font-bold">
              No Purchased Recipes
            </h2>

            <p className="mt-4 text-gray-500 max-w-xl mx-auto">
              You haven't purchased any premium recipes yet.
              Browse our collection and unlock exclusive recipes.
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

            {purchasedRecipes.map((recipe) => (
              <div
                key={recipe._id}
                className="bg-base-100 rounded-2xl shadow-lg p-6"
              >
                <h2 className="text-2xl font-bold">
                  {recipe.recipeName}
                </h2>

                <p className="mt-3">
                  {recipe.category}
                </p>

                <Link
                  href={`/recipe/${recipe._id}`}
                  className="btn btn-warning mt-5"
                >
                  View Recipe
                </Link>
              </div>
            ))}

          </div>
        )}

      </div>
    </div>
  );
}