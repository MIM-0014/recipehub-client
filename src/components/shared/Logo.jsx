import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <h1 className="text-3xl font-bold text-orange-500">
        RecipeHub
      </h1>
    </Link>
  );
}