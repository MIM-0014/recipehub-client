"use client";

import { useRouter } from "next/navigation";
import { addRecipe } from "@/services/recipeApi";
import useAuth from "@/hooks/useAuth";

import RecipeForm from "@/components/dashboard/RecipeForm";
import toast from "react-hot-toast";


export default function AddRecipePage() {
  const router = useRouter();
  const { user } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

   const recipe = {
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

  status: "approved",
};

    try {
      await addRecipe(recipe);

      toast.success("Recipe Added Successfully!");

      form.reset();

      router.push("/dashboard/my-recipes");
    } catch (error) {
      console.log(error);
      alert("Failed to add recipe");
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-10 px-5">

        <h1 className="text-4xl font-bold mb-8">
          ➕ Add New Recipe
        </h1>

       <RecipeForm
  onSubmit={handleSubmit}
  buttonText="Save Recipe"
/>
      </div>
   
  );
}