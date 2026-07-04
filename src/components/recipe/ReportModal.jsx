"use client";

import { useState } from "react";
import toast from "react-hot-toast";

export default function ReportModal({
  recipeId,
  closeModal,
}) {
  const [reason, setReason] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!reason.trim()) {
      toast.error("Please enter a reason.");
      return;
    }

    // We will save this in MongoDB later
    console.log({
      recipeId,
      reason,
    });

    toast.success("Report submitted successfully!");

    closeModal();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="bg-white rounded-xl w-full max-w-md p-6 shadow-xl">

        <h2 className="text-2xl font-bold mb-5">
          🚩 Report Recipe
        </h2>

        <form onSubmit={handleSubmit}>

          <textarea
            className="textarea textarea-bordered w-full h-36"
            placeholder="Why are you reporting this recipe?"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
          />

          <div className="flex justify-end gap-3 mt-6">

            <button
              type="button"
              onClick={closeModal}
              className="btn btn-outline"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="btn btn-error"
            >
              Submit Report
            </button>

          </div>

        </form>

      </div>
    </div>
  );
}