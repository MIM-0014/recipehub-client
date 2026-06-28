import Link from "next/link";
import { GiKnifeFork } from "react-icons/gi";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2"
    >
      <div className="bg-orange-500 text-white p-2 rounded-xl">
        <GiKnifeFork size={22} />
      </div>

      <div>
        <h2 className="text-2xl font-bold text-orange-500">
          RecipeHub
        </h2>

        <p className="text-xs text-gray-500 -mt-1">
          Share • Cook • Inspire
        </p>
      </div>
    </Link>
  );
}