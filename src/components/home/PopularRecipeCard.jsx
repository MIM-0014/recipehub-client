import Image from "next/image";
import Link from "next/link";
import { FaHeart, FaUser } from "react-icons/fa";

export default function PopularRecipeCard({ recipe }) {
  return (
    <div className="group overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="relative h-52 overflow-hidden">
        <Image
          src={recipe.recipeImage}
          alt={recipe.recipeName}
          fill
          className="object-cover transition duration-500 group-hover:scale-110"
        />
      </div>

      <div className="space-y-4 p-6">
        <h3 className="text-xl font-bold line-clamp-1">
          {recipe.recipeName}
        </h3>

        <div className="flex items-center justify-between text-gray-600">
          <div className="flex items-center gap-2">
            <FaHeart className="text-red-500" />
            <span>{recipe.likesCount} Likes</span>
          </div>

          <div className="flex items-center gap-2">
            <FaUser />
            <span>{recipe.authorName}</span>
          </div>
        </div>

        <Link
          href={`/recipes/${recipe._id}`}
          className="inline-block rounded-lg bg-orange-500 px-5 py-2 font-medium text-white transition hover:bg-orange-600"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}