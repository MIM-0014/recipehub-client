import Container from "../shared/Container";
import RecipeCard from "../recipe/RecipeCard";
import FadeUp from "../common/FadeUp";
import featuredRecipes from "@/data/featuredRecipes";

export default function FeaturedRecipes() {
  return (
    <section className="bg-gray-50 py-20">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold">Featured Recipes</h2>

          <p className="mt-3 text-gray-500">
            Discover hand-picked recipes loved by our community.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {featuredRecipes.map((recipe) => (
            <FadeUp key={recipe.id}>
              <RecipeCard recipe={recipe} />
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
}