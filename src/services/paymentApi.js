import api from "./api";

// Get All Transactions
export const getAllTransactions = async () => {
  const res = await api.get("/payments");
  return res.data;
};