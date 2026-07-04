import Image from "next/image";
import Link from "next/link";
import { FaClock, FaUtensils } from "react-icons/fa";

export default function FeaturedRecipeCard({ recipe }) {
  return (
    <div className="group overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="relative h-56 overflow-hidden">
        <Image
          src={recipe.recipeImage}
          alt={recipe.recipeName}
          fill
          className="object-cover transition duration-500 group-hover:scale-110"
        />

        <span className="absolute left-4 top-4 rounded-full bg-orange-500 px-3 py-1 text-sm font-medium text-white">
          Featured
        </span>
      </div>

      <div className="space-y-4 p-6">
        <h3 className="line-clamp-1 text-xl font-bold">
          {recipe.recipeName}
        </h3>

        <div className="flex justify-between text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <FaUtensils />
            {recipe.category}
          </div>

          <div className="flex items-center gap-2">
            <FaClock />
            {recipe.preparationTime}
          </div>
        </div>

        <p className="line-clamp-2 text-gray-600">
          {recipe.instructions}
        </p>

        <Link
          href={`/recipes/${recipe._id}`}
          className="inline-block rounded-lg bg-orange-500 px-5 py-2 font-medium text-white transition hover:bg-orange-600"
        >
          View Recipe
        </Link>
      </div>
    </div>
  );
}