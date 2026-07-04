const BASE_URL = "http://localhost:5000/api";

// Add Report
export async function addReport(report) {
  const res = await fetch(`${BASE_URL}/reports`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(report),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Failed to report recipe");
  }

  return data;
}