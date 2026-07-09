import api from "./api";

// User
export async function addReport(report) {
  const res = await api.post("/reports", report);
  return res.data;
}

// Admin
export async function getReports() {
  const res = await api.get("/reports");
  return res.data;
}

export async function dismissReport(id) {
  const res = await api.patch(`/reports/${id}/dismiss`);
  return res.data;
}

export async function removeReportedRecipe(id) {
  const res = await api.delete(
    `/reports/${id}/remove-recipe`
  );

  return res.data;
}