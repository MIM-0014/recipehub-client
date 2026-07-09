"use client";

import { useEffect, useState } from "react";
import { checkRecipeAccess } from "@/services/recipeAccessApi";
import PurchaseButton from "./PurchaseButton";

export default function RecipeContent({ recipe }) {
  const [hasAccess, setHasAccess] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadAccess() {
      try {
        const data = await checkRecipeAccess(recipe._id);
        setHasAccess(data.hasAccess);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadAccess();
  }, [recipe._id]);

  if (loading) {
    return <p>Loading recipe...</p>;
  }

  if (!hasAccess) {
    return (
      <div className="bg-base-100 rounded-2xl shadow-lg p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">
          🔒 Premium Recipe
        </h2>

        <p className="mb-6 text-gray-500">
          Purchase this recipe to unlock the complete ingredients and cooking instructions.
        </p>

 <PurchaseButton recipeId={recipe._id} />
      </div>
    );
  }

  return (
    <>
      <div className="grid lg:grid-cols-3 gap-8 mt-12">

        <div className="bg-base-100 rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-5">
            🥗 Ingredients
          </h2>

          <ul className="space-y-3">
            {(recipe.ingredients || []).map((item, index) => (
              <li key={index}>
                ✔ {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2 bg-base-100 rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-5">
            👨‍🍳 Cooking Instructions
          </h2>

          <p className="leading-8 whitespace-pre-line">
            {recipe.instructions}
          </p>
        </div>

      </div>
    </>
  );
}