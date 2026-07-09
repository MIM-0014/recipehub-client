const BASE_URL = "http://localhost:5000/api";

// ====================================
// Create Recipe Checkout Session
// ====================================
export async function createRecipeCheckout(recipeId) {
  const res = await fetch(
    `${BASE_URL}/recipe-purchase/create-checkout-session`,
    {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        recipeId,
      }),
    }
  );

  if (!res.ok) {
    throw new Error("Failed to create checkout session");
  }

  return res.json();
}

// ====================================
// Verify Recipe Payment
// ====================================
export async function verifyRecipePayment(sessionId) {
  const res = await fetch(
    `${BASE_URL}/recipe-purchase/payment-success`,
    {
      method: "POST",
      credentials: "include", // Added for consistency
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sessionId,
      }),
    }
  );

  if (!res.ok) {
    throw new Error("Payment verification failed");
  }

  return res.json();
}

// ====================================
// Get Purchased Recipes
// ====================================
export async function getPurchasedRecipes() {
  const res = await fetch(
    `${BASE_URL}/recipe-purchase/my-purchases`,
    {
      credentials: "include",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to load purchased recipes");
  }

  return res.json();
}