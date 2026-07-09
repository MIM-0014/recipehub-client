const API_BASE_URL = (
  process.env.NEXT_PUBLIC_API_URL || process.env.API_URL || "http://127.0.0.1:5000"
).replace(/\/$/, "");
const BASE_URL = `${API_BASE_URL}/api`;

async function requestJson(url, options = {}) {
  try {
    const res = await fetch(url, {
      cache: "no-store",
      ...options,
    });

    const contentType = res.headers.get("content-type") || "";
    const isJson = contentType.includes("application/json");
    const data = isJson ? await res.json() : await res.text();

    if (!res.ok) {
      const message =
        (typeof data === "object" && data && data.message) ||
        (typeof data === "string" && data) ||
        "Request failed";

      throw new Error(message);
    }

    return data;
  } catch (error) {
    console.error(`API request failed for ${url}`, error);
    throw error;
  }
}

// Get All Recipes
export async function getRecipes() {
  return requestJson(`${BASE_URL}/recipes`);
}

// Get Single Recipe
export async function getRecipe(id) {
  try {
    return await requestJson(`${BASE_URL}/recipes/${id}`);
  } catch (error) {
    console.warn("Recipe fetch failed, returning null.", error);
    return null;
  }
}

// Add Recipe
export async function addRecipe(recipe) {
  return requestJson(`${BASE_URL}/recipes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(recipe),
  });
}

// Get My Recipes
export async function getMyRecipes() {
  return requestJson(`${BASE_URL}/recipes/my-recipes`, {
    credentials: "include",
  });
}

// Update Recipe
export async function updateRecipe(id, recipe) {
  return requestJson(`${BASE_URL}/recipes/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(recipe),
  });
}

// Like Recipe
export async function likeRecipe(id) {
  return requestJson(`${BASE_URL}/recipes/${id}/like`, {
    method: "PATCH",
    credentials: "include",
  });
}

// Delete Recipe
export async function deleteRecipe(id) {
  return requestJson(`${BASE_URL}/recipes/${id}`, {
    method: "DELETE",
    credentials: "include",
  });
}

// Dashboard Stats
export async function getDashboardStats(email) {
  return requestJson(`${BASE_URL}/dashboard/stats/${email}`, {
    credentials: "include",
  });
}

// Add Favorite
export async function addFavorite(favorite) {
  return requestJson(`${BASE_URL}/favorites`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(favorite),
  });
}

// Get Favorites
export async function getFavorites() {
  return requestJson(`${BASE_URL}/favorites`, {
    credentials: "include",
  });
}

// Delete Favorite
export async function deleteFavorite(id) {
  return requestJson(`${BASE_URL}/favorites/${id}`, {
    method: "DELETE",
    credentials: "include",
  });
}