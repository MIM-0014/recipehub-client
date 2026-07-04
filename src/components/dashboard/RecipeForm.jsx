"use client";

export default function RecipeForm({
  onSubmit,
  defaultValues = {},
  buttonText,
}) {
  return (
    <form
      onSubmit={onSubmit}
      className="space-y-5 bg-white p-8 rounded-2xl shadow"
    >
      <input
        name="recipeName"
        defaultValue={defaultValues.recipeName || ""}
        placeholder="Recipe Name"
        className="input input-bordered w-full"
        required
      />

      <input
        name="recipeImage"
        defaultValue={defaultValues.recipeImage || ""}
        placeholder="Recipe Image URL"
        className="input input-bordered w-full"
        required
      />

      <input
        name="category"
        defaultValue={defaultValues.category || ""}
        placeholder="Category"
        className="input input-bordered w-full"
        required
      />

      <input
        name="cuisineType"
        defaultValue={defaultValues.cuisineType || ""}
        placeholder="Cuisine Type"
        className="input input-bordered w-full"
        required
      />

      <select
        name="difficultyLevel"
        defaultValue={defaultValues.difficultyLevel || "Easy"}
        className="select select-bordered w-full"
      >
        <option>Easy</option>
        <option>Medium</option>
        <option>Hard</option>
      </select>

      <input
        name="preparationTime"
        defaultValue={defaultValues.preparationTime || ""}
        placeholder="Preparation Time"
        className="input input-bordered w-full"
        required
      />

      <textarea
        name="ingredients"
        defaultValue={
          defaultValues.ingredients
            ? defaultValues.ingredients.join(", ")
            : ""
        }
        placeholder="Ingredients (comma separated)"
        className="textarea textarea-bordered w-full"
        rows={4}
        required
      />

      <textarea
        name="instructions"
        defaultValue={defaultValues.instructions || ""}
        placeholder="Cooking Instructions"
        className="textarea textarea-bordered w-full"
        rows={6}
        required
      />

      <button
        className="btn btn-primary w-full"
        type="submit"
      >
        {buttonText}
      </button>
    </form>
  );
}