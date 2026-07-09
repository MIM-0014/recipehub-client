import api from "./api";

// Create Payment Intent
export const createPaymentIntent = async (amount) => {
  const res = await api.post(
    "/stripe/create-payment-intent",
    {
      amount,
    }
  );

  return res.data;
};