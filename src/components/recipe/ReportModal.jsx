"use client";

import { useState } from "react";
import toast from "react-hot-toast";

import { addReport } from "@/services/reportApi";

export default function ReportModal({
  open,
  setOpen,
  recipe,
}) {
  const [reason, setReason] = useState("Spam");
  const [loading, setLoading] = useState(false);

  if (!open) return null;

  const handleSubmit = async () => {
    setLoading(true);

    try {
     await addReport({
  recipeId: recipe._id,
  reason,
});
      toast.success("Report submitted");

      setOpen(false);
    } catch (error) {
      console.error(error);

      toast.error(
        error.response?.data?.message ||
          "Failed to submit report"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      <div className="bg-white rounded-xl w-full max-w-md p-8">

        <h2 className="text-2xl font-bold mb-6">
          Report Recipe
        </h2>

        <select
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          className="select select-bordered w-full"
        >
          <option>Spam</option>
          <option>Offensive Content</option>
          <option>Copyright Issue</option>
        </select>

        <div className="flex justify-end gap-3 mt-8">

          <button
            onClick={() => setOpen(false)}
            className="btn"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="btn btn-error"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>

        </div>

      </div>

    </div>
  );
}