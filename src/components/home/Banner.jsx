import Link from "next/link";
import Image from "next/image";

export default function Banner() {
  return (
    <section className="bg-orange-50">
      <div className="mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-between gap-16 px-4 py-20 lg:flex-row">
        {/* Left Content */}
        <div className="max-w-2xl">
          <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
            🍽️ Share • Discover • Cook
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight text-gray-900 md:text-7xl">
            Discover Recipes
            <span className="block text-orange-500">
              From Around the World
            </span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            RecipeHub helps food lovers discover amazing recipes, share their
            own creations, save favorites, and connect with a growing cooking
            community.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/browse-recipes"
              className="rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
            >
              Browse Recipes
            </Link>

            <Link
              href="/register"
              className="rounded-lg border border-orange-500 px-6 py-3 font-semibold text-orange-500 transition hover:bg-orange-500 hover:text-white"
            >
              Join Community
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-12 flex flex-wrap gap-10">
            <div>
              <h2 className="text-3xl font-bold">500+</h2>
              <p className="text-gray-500">Recipes</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold">5K+</h2>
              <p className="text-gray-500">Food Lovers</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold">20+</h2>
              <p className="text-gray-500">Categories</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full max-w-xl">
         <Image
  src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=900"
  alt="Healthy food"
  width={700}
  height={700}
  className="w-full rounded-3xl object-cover shadow-2xl"
/>
        </div>
      </div>
    </section>
  );
}