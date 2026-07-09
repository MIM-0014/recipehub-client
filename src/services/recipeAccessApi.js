const BASE_URL = "http://localhost:5000/api";

export async function checkRecipeAccess(recipeId) {
  const res = await fetch(
    `${BASE_URL}/recipe-access/${recipeId}`,
    {
      credentials: "include",
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to check recipe access");
  }

  return res.json();
}