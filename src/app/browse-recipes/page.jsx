"use client";

import { useEffect, useState } from "react";
import Container from "@/components/shared/Container";
import RecipeCard from "@/components/recipe/RecipeCard";

const API_URL = process.env.NEXT_PUBLIC_API_URL;


const categories = [
  "All",
  "Main Course",
  "Fast Food",
  "Burger",
  "Pasta",
];

export default function BrowseRecipes() {
  const [recipes, setRecipes] = useState([]);
  const [selected, setSelected] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    let url = `${API_URL}/api/recipes?page=${currentPage}&limit=6`;

    if (selected !== "All") {
      url += `&categories=${selected}`;
    }

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data.recipes);
        setTotalPages(data.totalPages);
      });
  }, [selected, currentPage]);

  return (
    <Container className="py-20">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold">
          Browse Recipes
        </h1>

        <p className="text-gray-500 mt-3">
          Discover recipes shared by our amazing community.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              setSelected(category);
              setCurrentPage(1);
            }}
            className={`px-5 py-2 rounded-full transition ${
              selected === category
                ? "bg-orange-500 text-white"
                : "bg-gray-200 hover:bg-orange-100"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Recipe Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe._id}
            recipe={recipe}
          />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-3 mt-12">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
          className="px-4 py-2 rounded-lg border disabled:opacity-50 hover:bg-orange-100"
        >
          Previous
        </button>

        {[...Array(totalPages).keys()].map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page + 1)}
            className={`w-10 h-10 rounded-full ${
              currentPage === page + 1
                ? "bg-orange-500 text-white"
                : "border hover:bg-orange-100"
            }`}
          >
            {page + 1}
          </button>
        ))}

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
          className="px-4 py-2 rounded-lg border disabled:opacity-50 hover:bg-orange-100"
        >
          Next
        </button>
      </div>
    </Container>
  );
}