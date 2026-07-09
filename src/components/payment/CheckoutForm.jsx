"use client";

import { useEffect, useState } from "react";

import {
  CardElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";

import toast from "react-hot-toast";

import { createPaymentIntent } from "@/services/stripeApi";

export default function CheckoutForm({
  amount,
}) {
  const stripe = useStripe();
  const elements = useElements();

  const [clientSecret, setClientSecret] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  useEffect(() => {
    const loadSecret = async () => {
      const data =
        await createPaymentIntent(amount);

      setClientSecret(
        data.clientSecret
      );
    };

    loadSecret();
  }, [amount]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements)
      return;

    setLoading(true);

    const card =
      elements.getElement(CardElement);

    const { error } =
      await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card,
          },
        }
      );

    if (error) {
      toast.error(error.message);
      setLoading(false);
      return;
    }

    toast.success(
      "Payment Successful!"
    );

    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <CardElement
        className="border rounded-lg p-4"
      />

      <button
        disabled={
          !stripe || loading
        }
        className="btn btn-primary w-full"
      >
        {loading
          ? "Processing..."
          : `Pay $${amount}`}
      </button>
    </form>
  );
}