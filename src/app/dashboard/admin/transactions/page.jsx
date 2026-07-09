"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { getAllTransactions } from "@/services/paymentApi";

export default function TransactionsPage() {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTransactions = async () => {
      try {
        const data = await getAllTransactions();
        setPayments(data);
      } catch (error) {
        console.error(error);
        toast.error("Failed to load transactions");
      } finally {
        setLoading(false);
      }
    };

    loadTransactions();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-20">
        Loading Transactions...
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto">

      <h1 className="text-4xl font-bold mb-8">
        💳 Transactions
      </h1>

      <div className="overflow-x-auto bg-base-100 rounded-xl shadow">

        <table className="table">

          <thead>
            <tr>
                <th>#</th>
                <th>User</th>
                <th>Amount</th>
                <th>Transaction ID</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>

            <tbody>

              {payments.length === 0 ? (
                <tr>
                  <td colSpan="6" className="text-center py-10">
                    No Transactions Found
                  </td>
                </tr>
              ) : (
                payments.map((payment, index) => (
                  <tr key={payment._id}>

                    <td>{index + 1}</td>

                    <td>{payment.userEmail}</td>

                    <td>
                      $
                      {payment.amount}
                    </td>

                    <td className="font-mono text-xs">
                      {payment.transactionId}
                    </td>

                    <td>
                      <span className="badge badge-success">
                        {payment.paymentStatus}
                      </span>
                    </td>

                    <td>
                      {payment.paidAt
                        ? new Date(payment.paidAt).toLocaleString()
                        : "-"}
                    </td>

                  </tr>
                ))
              )}

            </tbody>

          </table>

        </div>

      </div>
    );
}