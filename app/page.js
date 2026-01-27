import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import FeaturedProjects from "@/components/FeaturedProjects";

export default function Home() {
  return (
    <div className="max-w-250 mx-auto px-4 py-16 sm:px-6 md:py-24">
      <AboutSection />
      <SkillsSection />
      <FeaturedProjects limit={3} />
    </div>
  );
}
