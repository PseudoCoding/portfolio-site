import { render, screen } from '@testing-library/react';
import App from './App';

vi.mock('framer-motion', () => import('./__mocks__/framer-motion'));

// Mock individual section components to keep the App smoke test fast and
// isolated from section-level rendering complexity.
vi.mock('./components/ui/ScrollProgress', () => ({ ScrollProgress: () => <div data-testid="scroll-progress" /> }));
vi.mock('./components/layout/Navbar', () => ({ Navbar: () => <nav data-testid="navbar" /> }));
vi.mock('./components/layout/Footer', () => ({ Footer: () => <footer data-testid="footer" /> }));
vi.mock('./components/sections/Hero', () => ({ Hero: () => <section data-testid="hero" /> }));
vi.mock('./components/sections/Experience', () => ({ Experience: () => <section data-testid="experience" /> }));
vi.mock('./components/sections/EducationAndCerts', () => ({ EducationAndCerts: () => <section data-testid="education-certs" /> }));
vi.mock('./components/sections/Skills', () => ({ Skills: () => <section data-testid="skills" /> }));
vi.mock('./components/sections/Projects', () => ({ Projects: () => <section data-testid="projects" /> }));
vi.mock('./components/sections/GitHubProjects', () => ({ GitHubProjects: () => <section data-testid="github-projects" /> }));
vi.mock('./components/sections/Community', () => ({ Community: () => <section data-testid="community" /> }));
vi.mock('./components/sections/Hobbies', () => ({ Hobbies: () => <section data-testid="hobbies" /> }));
vi.mock('./components/sections/Testimonials', () => ({ Testimonials: () => <section data-testid="testimonials" /> }));
vi.mock('./components/sections/Contact', () => ({ Contact: () => <section data-testid="contact" /> }));

describe('App', () => {
  it('App_render_doesNotThrow', () => {
    // Arrange, Act & Assert
    expect(() => render(<App />)).not.toThrow();
  });

  it('App_render_includesNavbar', () => {
    // Arrange & Act
    render(<App />);

    // Assert
    expect(screen.getByTestId('navbar')).toBeInTheDocument();
  });

  it('App_render_includesFooter', () => {
    // Arrange & Act
    render(<App />);

    // Assert
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });

  it('App_render_includesScrollProgressIndicator', () => {
    // Arrange & Act
    render(<App />);

    // Assert
    expect(screen.getByTestId('scroll-progress')).toBeInTheDocument();
  });

  it('App_render_includesAllSections', () => {
    // Arrange & Act
    render(<App />);

    // Assert
    const expectedTestIds = [
      'hero', 'experience', 'education-certs', 'skills',
      'projects', 'github-projects', 'community', 'hobbies',
      'testimonials', 'contact',
    ];

    expectedTestIds.forEach((testId) => {
      expect(screen.getByTestId(testId)).toBeInTheDocument();
    });
  });
});
