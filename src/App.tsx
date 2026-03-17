/**
 * App
 * ───
 * Root application component.
 *
 * Section order (can be reordered here):
 *   Hero → Experience → Skills → Projects → Community → Hobbies → Testimonials → Contact
 *
 * All content is imported from `src/config.ts`. No content lives in component files.
 */
import { config } from './config';
import { ScrollProgress } from './components/ui/ScrollProgress';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Experience } from './components/sections/Experience';
import { EducationAndCerts } from './components/sections/EducationAndCerts';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { GitHubProjects } from './components/sections/GitHubProjects';
import { Community } from './components/sections/Community';
import { Hobbies } from './components/sections/Hobbies';
import { Testimonials } from './components/sections/Testimonials';
import { Contact } from './components/sections/Contact';

export default function App() {
  return (
    <>
      {/* Scroll progress indicator at the very top of the viewport */}
      <ScrollProgress />

      {/* Navigation */}
      <Navbar meta={config.meta} />

      {/* Main content */}
      <main>
        <Hero hero={config.hero} meta={config.meta} />
        <Experience config={config.experience} />
        <EducationAndCerts education={config.education} certifications={config.certifications} />
        <Skills skills={config.skills} />
        <Projects projects={config.projects} />
        <GitHubProjects projects={config.githubProjects} />
        <Community entries={config.community} />
        <Hobbies hobbies={config.hobbies} />
        <Testimonials testimonials={config.testimonials} />
        <Contact contact={config.contact} meta={config.meta} />
      </main>

      <Footer meta={config.meta} />
    </>
  );
}
