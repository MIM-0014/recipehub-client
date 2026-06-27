import Image from "next/image";
import Link from "next/link";
import { Clock3, Heart, ChefHat } from "lucide-react";

export default function RecipeCard({ recipe }) {
  return (
    <div className="group overflow-hidden rounded-3xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="relative h-60 overflow-hidden">
        <Image
          src={recipe.recipeImage}
          alt={recipe.recipeName}
          fill
          className="object-cover transition duration-500 group-hover:scale-110"
        />

        <span className="absolute left-4 top-4 rounded-full bg-orange-500 px-3 py-1 text-sm font-semibold text-white">
          {recipe.category}
        </span>
      </div>

      <div className="space-y-4 p-6">
        <h2 className="text-2xl font-bold">
          {recipe.recipeName}
        </h2>

        <p className="text-gray-500">
          {recipe.cuisineType} Cuisine
        </p>

        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <Clock3 size={18} />
            {recipe.preparationTime} mins
          </div>

          <div className="flex items-center gap-2">
            <Heart
              size={18}
              className="text-red-500"
            />
            {recipe.likes}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2 text-sm">
            <ChefHat size={18} />
            {recipe.author}
          </span>

          <span className="rounded-full bg-gray-100 px-3 py-1 text-sm">
            {recipe.difficulty}
          </span>
        </div>

        <Link
          href={`/recipe/${recipe.id}`}
          className="block rounded-xl bg-orange-500 py-3 text-center font-semibold text-white transition hover:bg-orange-600"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}