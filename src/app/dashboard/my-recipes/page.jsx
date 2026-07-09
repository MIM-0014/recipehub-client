"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import PrivateRoute from "@/components/auth/PrivateRoute";
import useAuth from "@/hooks/useAuth";
import {
  getMyRecipes,
  deleteRecipe,
} from "@/services/recipeApi";
import toast from "react-hot-toast";

export default function MyRecipesPage() {
const { user, loading: authLoading } = useAuth();
  const router = useRouter();
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  

  useEffect(() => {
  if (authLoading) return;

  if (!user) {
  return;
}

  async function loadRecipes() {
    try {
      const data = await getMyRecipes();
      setRecipes(data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to load recipes");
    } finally {
      setLoading(false);
    }
  }

  loadRecipes();
}, [user, authLoading]);

  // Edit Recipe
  const handleEdit = (id) => {
    router.push(`/dashboard/update-recipe/${id}`);
  };

  
  // Delete Recipe
const handleDelete = async (id) => {
  if (!window.confirm("Are you sure you want to delete this recipe?")) return;

  try {
    const data = await deleteRecipe(id);

    if (data.deletedCount > 0) {
      toast.success("Recipe deleted successfully.");
      setRecipes((prev) =>
        prev.filter((recipe) => recipe._id !== id)
      );
    }
  } catch (error) {
    console.error(error);
    toast.error(error.message || "Failed to delete recipe");
  }
};

  if (authLoading || loading) {
  return (
    <div className="text-center py-20">
      Loading...
    </div>
  );
}

  return (
    <PrivateRoute>
      <div className="max-w-7xl mx-auto py-10 px-5">
        <h1 className="text-4xl font-bold mb-8">
          📋 My Recipes
        </h1>

        {recipes.length === 0 ? (
          <div className="text-center text-gray-500 py-20">
            You haven't added any recipes yet.
          </div>
        ) : (
          <div className="overflow-x-auto bg-white rounded-2xl shadow">
            <table className="table w-full">
              <thead className="bg-orange-500 text-white">
                <tr>
                  <th>#</th>
                  <th>Recipe</th>
                  <th>Category</th>
                  <th>Difficulty</th>
                  <th>Likes</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {recipes.map((recipe, index) => (
                  <tr key={recipe._id}>
                    <td>{index + 1}</td>

                    <td>{recipe.recipeName}</td>

                    <td>{recipe.category}</td>

                    <td>{recipe.difficultyLevel}</td>

                    <td>{recipe.likesCount}</td>

                    <td className="space-x-2">
                      <button
                        onClick={() => handleEdit(recipe._id)}
                        className="btn btn-sm btn-info"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => handleDelete(recipe._id)}
                        className="btn btn-sm btn-error"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </PrivateRoute>
  );
}