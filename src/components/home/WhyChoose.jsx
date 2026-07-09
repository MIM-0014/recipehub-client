import {
  FaUsers,
  FaHeart,
  FaUtensils,
  FaShieldAlt,
} from "react-icons/fa";

import Container from "../shared/Container";

const features = [
  {
    id: 1,
    icon: <FaUtensils size={36} />,
    title: "Share Your Recipes",
    description:
      "Publish your favorite recipes and inspire thousands of food lovers around the world.",
  },
  {
    id: 2,
    icon: <FaHeart size={36} />,
    title: "Save Favorites",
    description:
      "Keep your most loved recipes in one place and access them anytime.",
  },
  {
    id: 3,
    icon: <FaUsers size={36} />,
    title: "Community Driven",
    description:
      "Discover recipes shared by passionate home cooks and professional chefs.",
  },
  {
    id: 4,
    icon: <FaShieldAlt size={36} />,
    title: "Safe & Secure",
    description:
      "Enjoy a secure platform with authenticated users and protected content.",
  },
];

export default function WhyChoose() {
  return (
    <section className="py-24 bg-orange-50">
      <Container>
        <div className="text-center mb-14">
          

          <h2 className="text-4xl font-bold mt-3">
            Why Choose RecipeHub
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Everything you need to discover, organize and share
            delicious recipes with a growing community.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white rounded-2xl p-8 text-center shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-20 h-20 mx-auto rounded-full bg-orange-100 text-orange-500 flex items-center justify-center mb-6">
                {feature.icon}
              </div>

              <h3 className="text-xl font-bold mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {feature.description}
              </p>
            </div>
          ))}

        </div>
      </Container>
    </section>
  );
}