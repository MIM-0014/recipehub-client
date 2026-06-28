"use client";

import { FiMoon } from "react-icons/fi";

export default function ThemeToggle() {
  return (
    <button
      className="w-10 h-10 rounded-full border hover:bg-orange-50 transition flex items-center justify-center"
    >
      <FiMoon size={18} />
    </button>
  );
}