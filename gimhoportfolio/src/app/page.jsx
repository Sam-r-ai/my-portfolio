import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import TechStack from "@/components/techstack";
import FeaturedProjects from "@/components/featuredprojects";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TechStack />
      <FeaturedProjects />
    </>
  );
}
