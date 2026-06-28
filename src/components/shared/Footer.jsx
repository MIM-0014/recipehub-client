import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t mt-20">
      <div className="max-w-7xl mx-auto px-5 py-10">

        <div className="flex flex-col md:flex-row justify-between gap-10">

          <div>
            <Logo />

            <p className="mt-4 text-gray-500">
              Discover, Share and Enjoy Delicious Recipes.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-3">
              Quick Links
            </h3>

            <div className="flex flex-col gap-2">
              <Link href="/">Home</Link>

              <Link href="/browse-recipes">
                Browse Recipes
              </Link>

              <Link href="/dashboard">
                Dashboard
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-3">
              Contact
            </h3>

            <p>Email: support@recipehub.com</p>

            <p>Dhaka, Bangladesh</p>
          </div>

        </div>

        <div className="text-center mt-10 text-sm text-gray-500">
          © {new Date().getFullYear()} RecipeHub. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}