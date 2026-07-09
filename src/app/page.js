import Banner from "@/components/home/Banner";
import ExploreCategory from "@/components/home/ExploreCategory";
import FeaturedRecipes from "@/components/home/FeaturedRecipes";
import PopularRecipes from "@/components/home/PopularRecipes";
import WhyChoose from "@/components/home/WhyChoose";

export default function Home() {
  return (
    <>
      <Banner />
      <FeaturedRecipes />
      <PopularRecipes />
      <WhyChoose />
      <ExploreCategory />
    </>
  );
}