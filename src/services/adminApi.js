import api from "./api";

// Get all users
export const getAllUsers = async () => {
  const res = await api.get("/admin/users");
  return res.data;
};

// Update role
export const updateUserRole = async (email, role) => {
  const res = await api.patch(`/admin/users/role/${email}`, {
    role,
  });

  return res.data;
};
// =============================
// Get All Recipes
// =============================
export const getAllRecipes = async () => {
  const res = await api.get("/admin/recipes");
  return res.data;
};

// =============================
// Delete Recipe
// =============================
export const deleteRecipe = async (id) => {
  const res = await api.delete(`/admin/recipes/${id}`);
  return res.data;
};

// Get Reports
export const getAllReports = async () => {
  const res = await api.get("/admin/reports");
  return res.data;
};

// Delete Report
export const deleteReport = async (id) => {
  const res = await api.delete(`/admin/reports/${id}`);
  return res.data;
};
// Premium Requests
export const getPremiumRequests = async () => {
  const res = await api.get("/admin/premium");
  return res.data;
};

export const approvePremiumRequest = async (email) => {
  const res = await api.patch(
    `/admin/premium/approve/${email}`
  );

  return res.data;
};

export const rejectPremiumRequest = async (email) => {
  const res = await api.delete(
    `/admin/premium/reject/${email}`
  );

  return res.data;
};

export const getAdminStats = async () => {
  const res = await api.get("/admin/stats");
  return res.data;
};
export const featureRecipe = async (id) => {
  const res = await api.patch(
    `/admin/recipes/feature/${id}`
  );

  return res.data;
};
// Block / Unblock
export const updateBlockStatus = async (email, isBlocked) => {
  const res = await api.patch(
    `/admin/users/block/${email}`,
    {
      isBlocked,
    }
  );

  return res.data;
};