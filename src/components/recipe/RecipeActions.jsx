"use client";

import { useState } from "react";

import FavoriteButton from "./FavoriteButton";
import ReportButton from "./ReportButton";
import ReportModal from "./ReportModal";

export default function RecipeActions({ recipe }) {
  const [openReport, setOpenReport] = useState(false);

  return (
    <div className="flex flex-col gap-4">

      <FavoriteButton recipeId={recipe._id} />

      <ReportButton
        onClick={() => setOpenReport(true)}
      />

      <ReportModal
        open={openReport}
        setOpen={setOpenReport}
        recipe={recipe}
      />

    </div>
  );
}