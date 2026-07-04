"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import toast from "react-hot-toast";
import AdminRoute from "@/components/auth/AdminRoute";

import {
  getAllRecipes,
  deleteRecipe,
} from "@/services/adminApi";

export default function ManageRecipesPage() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const loadRecipes = async () => {
    try {
      const data = await getAllRecipes();
      setRecipes(data);
    } catch (error) {
      console.log(error);
      toast.error("Failed to load recipes");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadRecipes();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = confirm(
      "Are you sure you want to delete this recipe?"
    );

    if (!confirmDelete) return;

    try {
      await deleteRecipe(id);

      toast.success("Recipe Deleted");

      loadRecipes();
    } catch (error) {
      console.log(error);
      toast.error("Delete Failed");
    }
  };

  const filteredRecipes = useMemo(() => {
    return recipes.filter((recipe) =>
      recipe.title
        ?.toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [recipes, search]);

  if (loading) {
    return (
      <div className="text-center py-20">
        Loading...
      </div>
    );
  }

  return (
    <AdminRoute>
      <div className="max-w-7xl mx-auto">

        <div className="flex justify-between items-center mb-8">

          <h1 className="text-4xl font-bold">
            🍲 Manage Recipes
          </h1>

          <input
            type="text"
            placeholder="Search recipe..."
            className="input input-bordered w-80"
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

        </div>

        <div className="overflow-x-auto bg-white rounded-xl shadow">

          <table className="table">

            <thead>

              <tr>
                <th>Image</th>
                <th>Recipe</th>
                <th>Category</th>
                <th>Author</th>
                <th>Likes</th>
                <th>Premium</th>
                <th>Action</th>
              </tr>

            </thead>

            <tbody>

              {filteredRecipes.map((recipe) => (

                <tr key={recipe._id}>

                  <td>

                    <Image
                      src={recipe.image}
                      alt={recipe.title}
                      width={70}
                      height={70}
                      className="rounded-lg object-cover"
                    />

                  </td>

                  <td>

                    <div className="font-semibold">
                      {recipe.title}
                    </div>

                  </td>

                  <td>
                    {recipe.category}
                  </td>

                  <td>
                    {recipe.authorEmail}
                  </td>

                  <td>
                    ❤️ {recipe.likes || 0}
                  </td>

                  <td>

                    {recipe.isPremium ? (
                      <span className="badge badge-warning">
                        Premium
                      </span>
                    ) : (
                      <span className="badge badge-success">
                        Free
                      </span>
                    )}

                  </td>

                  <td>

                    <button
                      onClick={() =>
                        handleDelete(recipe._id)
                      }
                      className="btn btn-error btn-sm"
                    >
                      Delete
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>
    </AdminRoute>
  );
}