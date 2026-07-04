import Link from "next/link";
import {
  FaPizzaSlice,
  FaHamburger,
  FaIceCream,
  FaLeaf,
  FaDrumstickBite,
  FaFish,
} from "react-icons/fa";

import Container from "../shared/Container";

const categories = [
  {
    id: 1,
    name: "Pizza",
    icon: <FaPizzaSlice size={40} />,
    color: "bg-red-100 text-red-500",
  },
  {
    id: 2,
    name: "Burger",
    icon: <FaHamburger size={40} />,
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    id: 3,
    name: "Dessert",
    icon: <FaIceCream size={40} />,
    color: "bg-pink-100 text-pink-500",
  },
  {
    id: 4,
    name: "Salad",
    icon: <FaLeaf size={40} />,
    color: "bg-green-100 text-green-600",
  },
  {
    id: 5,
    name: "Chicken",
    icon: <FaDrumstickBite size={40} />,
    color: "bg-orange-100 text-orange-500",
  },
  {
    id: 6,
    name: "Seafood",
    icon: <FaFish size={40} />,
    color: "bg-cyan-100 text-cyan-600",
  },
];

export default function ExploreCategory() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="text-center mb-14">
          <p className="text-orange-500 font-semibold">
            Browse Categories
          </p>

          <h2 className="text-4xl font-bold mt-3">
            Explore by Category
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Find recipes based on your favorite food category.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/browse-recipes?category=${category.name}`}
              className="group"
            >
              <div className="rounded-2xl border bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-orange-400 hover:shadow-xl">

                <div
                  className={`mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full ${category.color} transition-transform duration-300 group-hover:scale-110`}
                >
                  {category.icon}
                </div>

                <h3 className="text-lg font-bold">
                  {category.name}
                </h3>
              </div>
            </Link>
          ))}

        </div>
      </Container>
    </section>
  );
}