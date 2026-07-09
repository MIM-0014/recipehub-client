"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

import RecipeForm from "@/components/dashboard/RecipeForm";
import {
  getRecipe,
  updateRecipe,
} from "@/services/recipeApi";

import toast from "react-hot-toast";

export default function UpdateRecipePage() {
  const { id } = useParams();

  const router = useRouter();

  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    async function loadRecipe() {
      const data = await getRecipe(id);
      setRecipe(data);
    }

    if (id) {
      loadRecipe();
    }
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    const form = e.target;

    const updatedRecipe = {
      recipeName: form.recipeName.value,
      recipeImage: form.recipeImage.value,
      category: form.category.value,
      cuisineType: form.cuisineType.value,
      difficultyLevel: form.difficultyLevel.value,
      preparationTime: form.preparationTime.value,

      ingredients: form.ingredients.value
        .split(",")
        .map((item) => item.trim()),

      instructions: form.instructions.value,
    };

    try {
      await updateRecipe(id, updatedRecipe);

      toast.success("Recipe Updated Successfully!");

      router.push("/dashboard/my-recipes");
    } catch (error) {
      console.error(error);
      toast.error(error.message || "Failed to update recipe");
    }
  };

  if (!recipe) {
    return (
      <div className="text-center py-20">
        Loading...
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto py-10 px-5">

      <h1 className="text-4xl font-bold mb-8">
        Update Recipe
      </h1>

      <RecipeForm
        onSubmit={handleUpdate}
        defaultValues={recipe}
        buttonText="Update Recipe"
      />

    </div>
  );
}