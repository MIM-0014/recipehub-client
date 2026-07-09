"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/shared/Container";

const bannerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      when: "beforeChildren",
      staggerChildren: 0.16,
    },
  },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8 },
  },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, delay: 0.2 },
  },
};

const floatIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.4 },
  },
};

export default function Banner() {
  return (
    <motion.section
      className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-yellow-50"
      initial="hidden"
      animate="visible"
      variants={bannerContainer}
    >
      {/* Background Blur */}
      <div className="absolute -top-28 -left-28 h-80 w-80 rounded-full bg-orange-200/30 blur-3xl"></div>
      <div className="absolute -bottom-28 -right-28 h-80 w-80 rounded-full bg-yellow-200/30 blur-3xl"></div>
      <div className="absolute top-20 right-1/3 h-52 w-52 rounded-full bg-red-100/40 blur-3xl"></div>

      <Container>
        <div className="grid min-h-[90vh] items-center gap-14 py-16 lg:grid-cols-2">

          {/* Left Side */}
          <motion.div
            variants={fadeInLeft}
            className="space-y-8"
          >
            <span className="inline-flex rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold text-orange-600 shadow-sm">
              🍽️ Discover • Cook • Share
            </span>

            <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-6xl lg:text-7xl">
              Discover
              <span className="block bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                Delicious Recipes
              </span>
              From Around the World
            </h1>

            <p className="max-w-xl text-lg leading-8 text-gray-600">
              Explore thousands of delicious recipes, share your own
              culinary creations, save your favorites, and become part of
              a growing community of passionate food lovers.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-5">
              <Link
                href="/browse-recipes"
                aria-label="Browse Recipes"
                className="rounded-xl bg-orange-500 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600 hover:shadow-orange-300"
              >
                Browse Recipes
              </Link>

              <Link
                href="/register"
                aria-label="Get Started"
                className="rounded-xl border-2 border-orange-500 px-8 py-4 font-semibold text-orange-500 transition-all duration-300 hover:-translate-y-1 hover:bg-orange-500 hover:text-white"
              >
                Get Started
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-5 pt-6">

              <div className="rounded-2xl bg-white px-6 py-5 shadow-md transition hover:-translate-y-1 hover:shadow-xl">
                <h3 className="text-3xl font-bold text-orange-500">
                  10K+
                </h3>
                <p className="text-gray-500">
                  Recipes
                </p>
              </div>

              <div className="rounded-2xl bg-white px-6 py-5 shadow-md transition hover:-translate-y-1 hover:shadow-xl">
                <h3 className="text-3xl font-bold text-orange-500">
                  5K+
                </h3>
                <p className="text-gray-500">
                  Members
                </p>
              </div>

              <div className="rounded-2xl bg-white px-6 py-5 shadow-md transition hover:-translate-y-1 hover:shadow-xl">
                <h3 className="text-3xl font-bold text-orange-500">
                  50+
                </h3>
                <p className="text-gray-500">
                  Categories
                </p>
              </div>

            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            variants={fadeInRight}
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative"
          >
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=900&q=80"
                alt="RecipeHub Hero"
                width={700}
                height={700}
                priority
                sizes="(max-width:768px) 100vw, 50vw"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Floating Card */}
            <motion.div
              variants={floatIn}
              className="absolute -bottom-8 left-6 rounded-2xl border border-white/40 bg-white/90 p-5 shadow-2xl backdrop-blur-md"
            >
              <p className="text-sm text-gray-500">
                ⭐ Featured Today
              </p>

              <h4 className="mt-1 text-lg font-bold text-gray-800">
                Healthy Avocado Salad 🥗
              </h4>

              <p className="mt-1 text-sm text-gray-500">
                4.9 Rating • 1.2K Likes
              </p>
            </motion.div>
          </motion.div>

        </div>
      </Container>
    </motion.section>
  );
}