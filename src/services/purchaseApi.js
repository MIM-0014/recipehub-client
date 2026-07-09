import api from "./api";

export const getPurchasedRecipes = async () => {
  const res = await api.get(
    "/purchases/my-purchases"
  );

  return res.data;
};