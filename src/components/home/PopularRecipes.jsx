"use client";

import { motion } from "framer-motion";
import Container from "../shared/Container";
import PopularRecipeCard from "./PopularRecipeCard";

const popularRecipes = [
  {
    _id: "1",
    recipeName: "Grilled Chicken",
    recipeImage:
      "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=900&q=80",
    likesCount: 425,
    authorName: "John Doe",
  },
  {
    _id: "2",
    recipeName: "Creamy Pasta",
    recipeImage:
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=900&q=80",
    likesCount: 390,
    authorName: "Sarah Smith",
  },
  {
    _id: "3",
    recipeName: "Beef Burger",
    recipeImage:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=900&q=80",
    likesCount: 365,
    authorName: "Michael Lee",
  },
];

export default function PopularRecipes() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="mb-14 text-center">
         

          <h2 className="mt-3 text-4xl font-bold">
            Popular Recipes
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Discover the recipes our community loves the most.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {popularRecipes.map((recipe) => (
            <PopularRecipeCard
              key={recipe._id}
              recipe={recipe}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}