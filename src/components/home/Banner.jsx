"use client";

import Link from "next/link";
import Image from "next/image";
import Container from "@/components/shared/Container";

export default function Banner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-yellow-50">
      {/* Decorative Circles */}
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-orange-200/30 blur-3xl"></div>
      <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-yellow-200/30 blur-3xl"></div>

      <Container>
        <div className="grid items-center gap-14 py-16 lg:min-h-[85vh] lg:grid-cols-2">

          {/* Left Content */}
          <div className="space-y-8">

            <span className="inline-flex rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
              🍽️ Discover • Cook • Share
            </span>

            <h1 className="text-5xl font-extrabold leading-tight text-gray-900 lg:text-6xl">
              Discover Amazing
              <span className="block text-orange-500">
                Recipes From
              </span>
              Around the World
            </h1>

            <p className="max-w-xl text-lg leading-8 text-gray-600">
              Join thousands of food lovers. Explore delicious recipes,
              share your own creations, save your favorites, and become
              part of the RecipeHub community.
            </p>

            <div className="flex flex-wrap gap-4">

              <Link
                href="/browse-recipes"
                className="rounded-xl bg-orange-500 px-7 py-4 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-orange-600"
              >
                Browse Recipes
              </Link>

              <Link
                href="/register"
                className="rounded-xl border border-orange-500 px-7 py-4 font-semibold text-orange-500 transition duration-300 hover:bg-orange-500 hover:text-white"
              >
                Get Started
              </Link>

            </div>

            {/* Stats */}

            <div className="flex flex-wrap gap-10 pt-6">

              <div>
                <h3 className="text-3xl font-bold text-orange-500">
                  10K+
                </h3>

                <p className="text-gray-600">
                  Recipes
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-orange-500">
                  5K+
                </h3>

                <p className="text-gray-600">
                  Members
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-orange-500">
                  50+
                </h3>

                <p className="text-gray-600">
                  Categories
                </p>
              </div>

            </div>
          </div>

          {/* Right Image */}

          <div className="relative">

            <div className="overflow-hidden rounded-3xl shadow-2xl">

              <Image
                src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=900&q=80"
                alt="RecipeHub Hero"
                width={700}
                height={700}
                priority
                className="h-full w-full object-cover"
              />

            </div>

            {/* Floating Card */}

            <div className="absolute -bottom-8 -left-8 rounded-2xl bg-white p-5 shadow-xl">

              <p className="text-sm text-gray-500">
                Featured Today
              </p>

              <h4 className="font-bold">
                Healthy Avocado Salad 🥗
              </h4>

            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}