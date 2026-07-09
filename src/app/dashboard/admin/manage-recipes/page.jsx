"use client";

import { useEffect, useMemo, useState } from "react";
import Swal from "sweetalert2";
import {
  getAllRecipes,
  deleteRecipe,
  featureRecipe,
} from "@/services/adminApi";

export default function ManageRecipes() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const recipesPerPage = 10;

  // ==========================
  // Load Recipes
  // ==========================

  const loadRecipes = async () => {
    try {
      const data = await getAllRecipes();
      setRecipes(data);
    } catch (error) {
      console.error(error);

      Swal.fire({
        icon: "error",
        title: "Failed to load recipes",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadRecipes();
  }, []);

  // ==========================
  // Statistics
  // ==========================

  const stats = useMemo(() => {
    return {
      total: recipes.length,

      featured: recipes.filter(
        (recipe) => recipe.isFeatured
      ).length,

      likes: recipes.reduce(
        (sum, recipe) =>
          sum + (recipe.likesCount || 0),
        0
      ),

      premium: recipes.filter(
        (recipe) =>
          Number(
            recipe.price ||
              recipe.recipePrice ||
              0
          ) > 0
      ).length,
    };
  }, [recipes]);

  // ==========================
  // Search
  // ==========================

  const filteredRecipes = recipes.filter((recipe) => {
    const keyword = search.toLowerCase();

    return (
      recipe.recipeName
        ?.toLowerCase()
        .includes(keyword) ||
      recipe.authorName
        ?.toLowerCase()
        .includes(keyword) ||
      recipe.category
        ?.toLowerCase()
        .includes(keyword)
    );
  });

  // ==========================
  // Pagination
  // ==========================

  const totalPages = Math.ceil(
    filteredRecipes.length / recipesPerPage
  );

  const startIndex =
    (currentPage - 1) * recipesPerPage;

  const currentRecipes =
    filteredRecipes.slice(
      startIndex,
      startIndex + recipesPerPage
    );

  // ==========================
  // Delete Recipe
  // ==========================

  const handleDelete = async (
    id,
    recipeName
  ) => {
    const result = await Swal.fire({
      title: "Delete Recipe?",
      text: `"${recipeName}" will be permanently deleted.`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ea580c",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Delete",
    });

    if (!result.isConfirmed) return;

    try {
      await deleteRecipe(id);

      Swal.fire({
        icon: "success",
        title: "Recipe Deleted",
        timer: 1500,
        showConfirmButton: false,
      });

      loadRecipes();
    } catch (error) {
      console.error(error);

      Swal.fire({
        icon: "error",
        title: "Delete Failed",
      });
    }
  };

  // ==========================
  // Feature Recipe
  // ==========================

  const handleFeature = async (id) => {
    try {
      await featureRecipe(id);

      Swal.fire({
        icon: "success",
        title: "Recipe Updated",
        timer: 1200,
        showConfirmButton: false,
      });

      loadRecipes();
    } catch (error) {
      console.error(error);

      Swal.fire({
        icon: "error",
        title: "Update Failed",
      });
    }
  };
    if (loading) {
    return (
      <div className="flex justify-center items-center h-[70vh]">
        <span className="loading loading-spinner loading-lg text-warning"></span>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-5 py-10 space-y-8">

      {/* ==========================
          Header
      ========================== */}

      <div>

        <h1 className="text-4xl font-bold">
          🍲 Manage Recipes
        </h1>

        <p className="text-gray-500 mt-2">
          View, feature and remove community recipes.
        </p>

      </div>

      {/* Search */}
      <div>

        <input
          type="text"
          placeholder="Search recipe, author..."
          className="input input-bordered w-full"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
        />

      </div>

      {/* ==========================
          Statistics
      ========================== */}

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

        <div className="rounded-2xl bg-white shadow p-6">

          <p className="text-sm text-gray-500">
            Total Recipes
          </p>

          <h2 className="text-4xl font-bold mt-2">
            {stats.total}
          </h2>

        </div>

        <div className="rounded-2xl bg-white shadow p-6">

          <p className="text-sm text-gray-500">
            Featured
          </p>

          <h2 className="text-4xl font-bold text-success mt-2">
            ⭐ {stats.featured}
          </h2>

        </div>

        <div className="rounded-2xl bg-white shadow p-6">

          <p className="text-sm text-gray-500">
            Premium
          </p>

          <h2 className="text-4xl font-bold text-warning mt-2">
            👑 {stats.premium}
          </h2>

        </div>

        <div className="rounded-2xl bg-white shadow p-6">

          <p className="text-sm text-gray-500">
            Total Likes
          </p>

          <h2 className="text-4xl font-bold text-error mt-2">
            ❤️ {stats.likes}
          </h2>

        </div>

      </div>

      {/* ==========================
          Table
      ========================== */}

      <div className="overflow-x-auto bg-white rounded-2xl shadow">

        <table className="table w-full py-5">

          <thead className="bg-orange-500 text-white">

            <tr>

              <th>Recipe</th>

              <th>Author</th>

              <th>Category</th>

              <th>Status</th>

              <th>Likes</th>

              <th className="text-center">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {currentRecipes.length === 0 ? (

              <tr>

                <td
                  colSpan={6}
                  className="text-center py-16"
                >

                  <div className="text-6xl">
                    🍲
                  </div>

                  <h2 className="text-2xl font-bold mt-4">
                    No Recipes Found
                  </h2>

                  <p className="text-gray-500 mt-2">
                    Try another search keyword.
                  </p>

                </td>

              </tr>

            ) : (

              currentRecipes.map((recipe) => (
                <tr
                  key={recipe._id}
                  className="hover:bg-gray-50"
                >

                  {/* Recipe */}

                  <td>

                    <div className="flex items-center gap-4">

                      <img
                        src={recipe.recipeImage}
                        alt={recipe.recipeName}
                        className="w-20 h-20 rounded-xl object-cover"
                      />

                      <div>

                        <h2 className="font-bold text-lg">
                          {recipe.recipeName}
                        </h2>

                        <p className="text-sm text-gray-500">
                          {recipe.cuisineType}
                        </p>

                      </div>

                    </div>

                  </td>

                  {/* Author */}

                  <td>

                    <div className="flex items-center gap-3">

                      <div className="avatar placeholder">

                        <div className="bg-orange-500 text-white rounded-full w-10">

                          <span>

                            {recipe.authorName?.charAt(0)}

                          </span>

                        </div>

                      </div>

                      <div>

                        <div className="font-semibold">
                          {recipe.authorName}
                        </div>

                        <div className="text-xs text-gray-500">
                          {recipe.authorEmail}
                        </div>

                      </div>

                    </div>

                  </td>

                  {/* Category */}

                  <td>

                    <span className="badge badge-primary badge-outline">

                      {recipe.category}

                    </span>

                  </td>

                  {/* Status */}

                  <td>

                    <div className="flex flex-col gap-2">

                      {recipe.isFeatured ? (

                        <span className="badge badge-success">
                        Featured
                        </span>

                      ) : (

                        <span className="badge badge-ghost">
                          Normal
                        </span>

                      )}

                      {(recipe.price > 0 ||
                        recipe.recipePrice > 0) ? (

                        <span className="badge badge-warning">
                          Premium
                        </span>

                      ) : (

                        <span className="badge badge-outline">
                          Free
                        </span>

                      )}

                    </div>

                  </td>

                  {/* Likes */}

                  <td>

                    <span className="badge badge-error">

                      {recipe.likesCount || 0}

                    </span>

                  </td>

                  {/* Actions */}

                  <td>

                    <div className="flex flex-col gap-2 justify-center">

                      <button
                        onClick={() =>
                          handleFeature(recipe._id)
                        }
                        className={`btn btn-sm ${
                          recipe.isFeatured
                            ? "btn-outline btn-warning"
                            : "btn-warning"
                        }`}
                      >
                        {recipe.isFeatured
                          ? "Unfeature"
                          : "Feature"}
                      </button>

                      <button
                        onClick={() =>
                          handleDelete(
                            recipe._id,
                            recipe.recipeName
                          )
                        }
                        className="btn btn-error btn-sm"
                      >
                        Delete
                      </button>

                    </div>

                  </td>

                </tr>
              ))

            )}

          </tbody>

        </table>

      </div>

      {/* ==========================
          Pagination
      ========================== */}

      {totalPages > 1 && (

        <div className="flex justify-center items-center gap-2 py-6">

          <button
            className="btn btn-outline btn-sm"
            disabled={currentPage === 1}
            onClick={() =>
              setCurrentPage((prev) => prev - 1)
            }
          >
            Previous
          </button>

          {Array.from(
            { length: totalPages },
            (_, index) => (

              <button
                key={index}
                onClick={() =>
                  setCurrentPage(index + 1)
                }
                className={`btn btn-sm ${
                  currentPage === index + 1
                    ? "btn-warning"
                    : "btn-outline"
                }`}
              >
                {index + 1}
              </button>

            )
          )}

          <button
            className="btn btn-outline btn-sm"
            disabled={currentPage === totalPages}
            onClick={() =>
              setCurrentPage((prev) => prev + 1)
            }
          >
            Next
          </button>

        </div>

      )}

    </div>

  );
}