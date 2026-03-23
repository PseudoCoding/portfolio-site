import { render, screen } from '@testing-library/react';
import { Hero } from '@/components/sections/Hero';
import type { HeroConfig, SiteMeta } from '@/types';

vi.mock('framer-motion', () => import('@mocks/framer-motion'));

const meta: SiteMeta = {
  title: 'Test Portfolio',
  description: 'Test',
  githubUrl: 'https://github.com/test',
  linkedinUrl: 'https://linkedin.com/in/test',
  resumeUrl: 'https://resume.r2.pseudocoding.xyz/devinhoude-resume.pdf',
};

const hero: HeroConfig = {
  greeting: "Hello, I'm",
  name: 'Jane Doe',
  handle: '@janedoe',
  taglines: ['Software Engineer', 'Cloud Architect'],
  bio: ['First bio paragraph.', 'Second bio paragraph.'],
  cta: { label: 'View Work', href: '#projects' },
  ctaSecondary: { label: 'Download CV', href: '/cv.pdf' },
};

describe('Hero', () => {
  it('Hero_render_doesNotThrow', () => {
    // Arrange, Act & Assert
    expect(() => render(<Hero hero={hero} meta={meta} />)).not.toThrow();
  });

  it('Hero_render_sectionHasCorrectId', () => {
    // Arrange & Act
    render(<Hero hero={hero} meta={meta} />);

    // Assert
    expect(document.getElementById('hero')).toBeInTheDocument();
  });

  it('Hero_render_showsName', () => {
    // Arrange & Act
    render(<Hero hero={hero} meta={meta} />);

    // Assert
    expect(screen.getByRole('heading', { name: hero.name })).toBeInTheDocument();
  });

  it('Hero_render_showsGreeting', () => {
    // Arrange & Act
    render(<Hero hero={hero} meta={meta} />);

    // Assert
    expect(screen.getByText(hero.greeting)).toBeInTheDocument();
  });

  it('Hero_render_showsBioParagraphs', () => {
    // Arrange & Act
    render(<Hero hero={hero} meta={meta} />);

    // Assert
    hero.bio.forEach((para) => {
      expect(screen.getByText(para)).toBeInTheDocument();
    });
  });

  it('Hero_render_showsPrimaryCtaLink', () => {
    // Arrange & Act
    render(<Hero hero={hero} meta={meta} />);

    // Assert
    expect(screen.getByRole('link', { name: new RegExp(hero.cta.label, 'i') })).toHaveAttribute('href', hero.cta.href);
  });

  it('Hero_render_showsSecondaryCta_whenConfigured', () => {
    // Arrange & Act
    render(<Hero hero={hero} meta={meta} />);

    // Assert
    expect(screen.getByRole('link', { name: new RegExp(hero.ctaSecondary!.label, 'i') })).toHaveAttribute('href', hero.ctaSecondary!.href);
  });

  it('Hero_render_noSecondaryCta_whenNotConfigured', () => {
    // Arrange
    const noSecondary: HeroConfig = { ...hero, ctaSecondary: undefined };

    // Act
    render(<Hero hero={noSecondary} meta={meta} />);

    // Assert
    expect(screen.queryByText(/download cv/i)).not.toBeInTheDocument();
  });

  it('Hero_render_showsGitHubAndLinkedInLinks', () => {
    // Arrange & Act
    render(<Hero hero={hero} meta={meta} />);

    // Assert — @PseudoCoding handle + social icon both link to GitHub, so use getAllByRole
    const githubLinks = screen.getAllByRole('link', { name: /github/i });
    expect(githubLinks.length).toBeGreaterThanOrEqual(1);
    expect(githubLinks.some(l => l.getAttribute('href') === meta.githubUrl)).toBe(true);
    expect(screen.getByRole('link', { name: /linkedin/i })).toHaveAttribute('href', meta.linkedinUrl);
  });
});
