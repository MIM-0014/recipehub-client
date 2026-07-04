"use client";

import { useState } from "react";
import ReportModal from "./ReportModal";

export default function ReportButton({ recipeId }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="btn btn-error"
      >
        🚩 Report Recipe
      </button>

      {open && (
        <ReportModal
          recipeId={recipeId}
          closeModal={() => setOpen(false)}
        />
      )}
    </>
  );
}