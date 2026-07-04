import Image from "next/image";
import Link from "next/link";

import Container from "@/components/shared/Container";
import FavoriteButton from "@/components/recipe/FavoriteButton";
import { getRecipe } from "@/services/recipeApi";
import ReportButton from "@/components/recipe/ReportButton";

export default async function RecipeDetails({ params }) {
  const { id } = await params;

  const recipe = await getRecipe(id);

  if (!recipe) {
    return (
      <Container className="py-20 text-center">
        <h1 className="text-4xl font-bold">
          Recipe Not Found
        </h1>

        <Link
          href="/browse-recipes"
          className="btn btn-primary mt-8"
        >
          Back to Recipes
        </Link>
      </Container>
    );
  }

  return (
    <Container className="py-16">
      <div className="max-w-6xl mx-auto">

        {/* Hero Image */}
        <div className="relative w-full h-[450px] rounded-3xl overflow-hidden shadow-xl">
          <Image
            src={recipe.recipeImage}
            alt={recipe.recipeName}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Title */}
        <div className="mt-10">

          <h1 className="text-5xl font-bold">
            {recipe.recipeName}
          </h1>

          <div className="flex flex-wrap gap-3 mt-6">

            <span className="badge badge-warning badge-lg">
              🍽 {recipe.category}
            </span>

            <span className="badge badge-info badge-lg">
              🌍 {recipe.cuisineType}
            </span>

            <span className="badge badge-success badge-lg">
              ⭐ {recipe.difficultyLevel}
            </span>

            <span className="badge badge-secondary badge-lg">
              ⏱ {recipe.preparationTime}
            </span>

            <span className="badge badge-error badge-lg">
              ❤️ {recipe.likesCount || 0}
            </span>

          </div>

        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-3 gap-8 mt-12">

          {/* Ingredients */}
          <div className="bg-base-100 rounded-2xl shadow-lg p-6">

            <h2 className="text-2xl font-bold mb-5">
              🥗 Ingredients
            </h2>

            <ul className="space-y-3">

              {(recipe.ingredients || []).map((item, index) => (

                <li
                  key={index}
                  className="flex gap-3"
                >
                  <span className="text-green-500">
                    ✔
                  </span>

                  <span>{item}</span>

                </li>

              ))}

            </ul>

          </div>

          {/* Instructions */}
          <div className="lg:col-span-2 bg-base-100 rounded-2xl shadow-lg p-6">

            <h2 className="text-2xl font-bold mb-5">
              👨‍🍳 Cooking Instructions
            </h2>

            <p className="leading-8 whitespace-pre-line">
              {recipe.instructions}
            </p>

          </div>

        </div>

        {/* Bottom */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">

          {/* Author */}
          <div className="bg-base-100 rounded-2xl shadow-lg p-6">

            <h2 className="text-2xl font-bold mb-5">
              👨 Author Information
            </h2>

            <div className="space-y-3">

              <p>
                <strong>Name:</strong>{" "}
                {recipe.authorName}
              </p>

              <p>
                <strong>Email:</strong>{" "}
                {recipe.authorEmail}
              </p>

              <p>
                <strong>Published:</strong>{" "}
                {recipe.createdAt}
              </p>

            </div>

          </div>

          {/* Actions */}
          <div className="flex flex-col justify-center items-center gap-5">

            <FavoriteButton recipeId={recipe._id} />

<ReportButton recipeId={recipe._id} />

<Link
  href="/browse-recipes"
  className="btn btn-warning"
>
  ← Back to Recipes
</Link>

          </div>

        </div>

      </div>
    </Container>
  );
}