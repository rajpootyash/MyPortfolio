import { HeroSection } from "../sections/HeroSection"
import { StatsSection } from "../sections/StatsSection"
import { AboutSection } from "../sections/AboutSection"
import { SkillsSection } from "../sections/SkillsSection"
import { ProjectsSection } from "../sections/ProjectsSection"
import { OtherProjectsSection } from "../sections/OtherProjectsSection"
import { ArchitectureSection } from "../sections/ArchitectureSection"
import { ExperienceSection } from "../sections/ExperienceSection"
import { WhyHireMeSection } from "../sections/WhyHireMeSection"
import { ContactSection } from "../sections/ContactSection"

export function HomePage() {
  return (
    <main>
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <OtherProjectsSection />
      <ArchitectureSection />
      <ExperienceSection />
      <WhyHireMeSection />
      <ContactSection />
    </main>
  )
}
