const BASE_URL = "http://localhost:5000/api";

// Get All Recipes
export async function getRecipes() {
  const res = await fetch(`${BASE_URL}/recipes`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch recipes");
  }

  return res.json();
}

// Get Single Recipe
export async function getRecipe(id) {
  const res = await fetch(`${BASE_URL}/recipes/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch recipe");
  }

  return res.json();
}

// Add Recipe
export async function addRecipe(recipe) {
  const res = await fetch(`${BASE_URL}/recipes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(recipe),
  });

  if (!res.ok) {
    throw new Error("Failed to add recipe");
  }

  return res.json();
}

// Get My Recipes
export async function getMyRecipes() {
  const res = await fetch(
    `${BASE_URL}/recipes/my-recipes`, {
    cache: "no-store",
    credentials: "include",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch recipes");
  }

  return res.json();
}

// Update Recipe
export async function updateRecipe(id, recipe) {
  const res = await fetch(`${BASE_URL}/recipes/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(recipe),
  });

  if (!res.ok) {
    throw new Error("Failed to update recipe");
  }

  return res.json();
}

// Like Recipe
export async function likeRecipe(id) {
  const res = await fetch(`${BASE_URL}/recipes/${id}/like`, {
    method: "PATCH",
    credentials: "include",
  });

  if (!res.ok) {
    throw new Error("Failed to like recipe");
  }

  return res.json();
}

// Delete Recipe
export async function deleteRecipe(id) {
  const res = await fetch(`${BASE_URL}/recipes/${id}`, {
    method: "DELETE",
    credentials: "include",
  });

  if (!res.ok) {
    throw new Error("Failed to delete recipe");
  }

  return res.json();
}
// Dashboard Stats
export async function getDashboardStats(email) {
  const res = await fetch(
    `${BASE_URL}/dashboard/stats/${email}`,
    {
      cache: "no-store",
      credentials: "include",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch dashboard stats");
  }

  return res.json();
}

// Add Favorite
export async function addFavorite(favorite) {
  const res = await fetch(`${BASE_URL}/favorites`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(favorite),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Failed to add favorite");
  }

  return data;
}

// Get Favorites
export async function getFavorites() {
  const res = await fetch(`${BASE_URL}/favorites`, {
    cache: "no-store",
    credentials: "include",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch favorites");
  }

  return res.json();
}

// Delete Favorite
export async function deleteFavorite(id) {
  const res = await fetch(`${BASE_URL}/favorites/${id}`, {
    method: "DELETE",
    credentials: "include",
  });

  if (!res.ok) {
    throw new Error("Failed to delete favorite");
  }

  return res.json();
}