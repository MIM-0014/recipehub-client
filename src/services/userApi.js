const BASE_URL = "http://localhost:5000/api";

// Save User
export async function saveUser(user) {
  const res = await fetch(`${BASE_URL}/users`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  if (!res.ok) {
    throw new Error("Failed to save user");
  }

  return res.json();
}

// Current User
export async function getCurrentUser() {
  const res = await fetch(`${BASE_URL}/users/me`, {
    credentials: "include",
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch user");
  }

  return res.json();
}

// Upgrade Premium
export async function upgradeToPremium() {
  const res = await fetch(`${BASE_URL}/users/premium`, {
    method: "PATCH",
    credentials: "include",
  });

  if (!res.ok) {
    throw new Error("Failed to upgrade");
  }

  return res.json();
}