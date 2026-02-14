import Navbar from "@/components/portfolio/Navbar";
import HeroSection from "@/components/portfolio/HeroSection";
import BackgroundSection from "@/components/portfolio/BackgroundSection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import CertificatesSection from "@/components/portfolio/CertificatesSection";
import AchievementsSection from "@/components/portfolio/AchievementsSection";
import OrganizationsSection from "@/components/portfolio/OrganizationsSection";
import ResearchSection from "@/components/portfolio/ResearchSection";
import BlogSection from "@/components/portfolio/BlogSection";
import SocialSection from "@/components/portfolio/SocialSection";
import Footer from "@/components/portfolio/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <BackgroundSection />
      <ExperienceSection />
      <CertificatesSection />
      <AchievementsSection />
      <OrganizationsSection />
      <ResearchSection />
      <BlogSection />
      <SocialSection />
      <Footer />
    </div>
  );
};

export default Index;
