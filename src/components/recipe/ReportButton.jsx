"use client";

export default function ReportButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="btn btn-error"
    >
      🚩 Report Recipe
    </button>
  );
}