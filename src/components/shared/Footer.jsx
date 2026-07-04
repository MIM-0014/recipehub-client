import Link from "next/link";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

import Container from "./Container";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <Container className="py-16">

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Logo */}
          <div>
            <Logo />

            <p className="mt-5 leading-7 text-gray-400">
              Discover, share and save your favorite recipes with food lovers
              from around the world.
            </p>

            <div className="mt-6 flex gap-4">

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 transition hover:scale-110"
              >
                <FaFacebookF className="text-white" />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 transition hover:scale-110"
              >
                <FaInstagram className="text-white" />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 transition hover:scale-110"
              >
                <FaGithub className="text-white" />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 transition hover:scale-110"
              >
                <FaLinkedinIn className="text-white" />
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>

            <h3 className="mb-5 text-xl font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-3">

              <li>
                <Link
                  href="/"
                  className="transition hover:text-orange-500"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/browse-recipes"
                  className="transition hover:text-orange-500"
                >
                  Browse Recipes
                </Link>
              </li>

              <li>
                <Link
                  href="/login"
                  className="transition hover:text-orange-500"
                >
                  Login
                </Link>
              </li>

              <li>
                <Link
                  href="/register"
                  className="transition hover:text-orange-500"
                >
                  Register
                </Link>
              </li>

            </ul>

          </div>

          {/* Categories */}

          <div>

            <h3 className="mb-5 text-xl font-semibold text-white">
              Categories
            </h3>

            <ul className="space-y-3">

              <li>Pizza</li>
              <li>Burger</li>
              <li>Dessert</li>
              <li>Salad</li>
              <li>Seafood</li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="mb-5 text-xl font-semibold text-white">
              Contact
            </h3>

            <div className="space-y-4">

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-orange-500" />
                support@recipehub.com
              </div>

              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-orange-500" />
                +880 1234-567890
              </div>

              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-orange-500" />
                Dhaka, Bangladesh
              </div>

            </div>

          </div>

        </div>

        <div className="mt-14 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">

          © {new Date().getFullYear()} RecipeHub. All Rights Reserved.

        </div>

      </Container>
    </footer>
  );
}