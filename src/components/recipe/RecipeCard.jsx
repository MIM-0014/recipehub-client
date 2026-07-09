import Link from "next/link";

export default function RecipeCard({ recipe }) {
  

  console.log(recipe);


  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
      <img
        src={recipe.recipeImage}
        alt={recipe.recipeName}
        className="w-full h-56 object-cover"
      />

      <div className="p-5">
        <span className="inline-block bg-orange-100 text-orange-600 text-sm px-3 py-1 rounded-full mb-3">
          {recipe.category}
        </span>

        <h2 className="text-xl font-bold mb-3">
          {recipe.recipeName}
        </h2>

        <div className="space-y-1 text-sm text-gray-600 dark:text-gray-300 mb-5">
          <p>
            <strong>Cuisine:</strong> {recipe.cuisineType}
          </p>

          <p>
            <strong>Difficulty:</strong> {recipe.difficultyLevel}
          </p>

          <p>
            ❤️ {recipe.likesCount} Likes
          </p>
        </div>

        <Link
          href={`/recipes/${recipe._id}`}
          className="block text-center bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl transition"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}