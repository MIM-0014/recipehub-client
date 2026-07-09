import Image from "next/image";
import Link from "next/link";
import RecipeContent from "@/components/recipe/RecipeContent";
import Container from "@/components/shared/Container";
import RecipeActions from "@/components/recipe/RecipeActions";
import { getRecipe } from "@/services/recipeApi";
import PurchaseButton from "@/components/recipe/PurchaseButton";
export default async function RecipeDetails({ params }) {
  const { id } = await params;

  let recipe = null;
  let errorMessage = null;

  try {
    recipe = await getRecipe(id);
  } catch (error) {
    errorMessage = error.message || "Unable to load recipe right now.";
  }

  if (!recipe) {
    return (
      <Container className="py-20 text-center">
        <h1 className="text-4xl font-bold">
          {errorMessage ? "Unable to load recipe" : "Recipe Not Found"}
        </h1>

        <p className="mt-4 text-gray-500 max-w-md mx-auto">
          {errorMessage || "The requested recipe could not be found."}
        </p>

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

      {/* Recipe Content */}
<RecipeContent recipe={recipe} />

        {/* Bottom */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">

          {/* Author */}
          <div className="bg-base-100 rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-5">
              👨 Author Information
            </h2>

            <div className="space-y-3">
              <p>
                <strong>Name:</strong> {recipe.authorName}
              </p>

              <p>
                <strong>Email:</strong> {recipe.authorEmail}
              </p>

              <p>
                <strong>Published:</strong>{" "}
                {new Date(recipe.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>

          {/* Actions */}
         {/* Actions */}
<div className="flex flex-col justify-center items-center gap-5 w-full">

  {/* Purchase Recipe */}
  <PurchaseButton recipeId={recipe._id} />

  {/* Like • Favorite • Report */}
  <RecipeActions recipe={recipe} />

  <Link
    href="/browse-recipes"
    className="btn btn-warning w-full"
  >
    ← Back to Recipes
  </Link>

</div>

        </div>

      </div>
    </Container>
  );
}