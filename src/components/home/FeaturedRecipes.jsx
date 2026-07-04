"use client";

import Container from "../shared/Container";
import FeaturedRecipeCard from "./FeaturedRecipeCard";

const featuredRecipes = [
  {
    _id: "1",
    recipeName: "Healthy Avocado Salad",
    recipeImage:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=900&q=80",
    category: "Salad",
    preparationTime: "20 mins",
    instructions:
      "Fresh avocado salad with vegetables and olive oil.",
  },
  {
    _id: "2",
    recipeName: "Chicken Biryani",
    recipeImage:
  "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=900&q=80",
    category: "Main Course",
    preparationTime: "60 mins",
    instructions:
      "Traditional spicy chicken biryani with basmati rice.",
  },
  {
    _id: "3",
    recipeName: "Chocolate Cake",
    recipeImage:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=900&q=80",
    category: "Dessert",
    preparationTime: "45 mins",
    instructions:
      "Soft chocolate cake with creamy frosting.",
  },
];

export default function FeaturedRecipes() {
  return (
    <section className="bg-gray-50 py-24">
      <Container>
        <div className="mb-14 text-center">
          <p className="font-semibold text-orange-500">
            Featured Collection
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            Featured Recipes
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Explore our handpicked recipes selected by our admin.
            Delicious, healthy and easy to cook.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredRecipes.map((recipe) => (
            <FeaturedRecipeCard
              key={recipe._id}
              recipe={recipe}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}