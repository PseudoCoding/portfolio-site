import { render, screen, fireEvent } from '@testing-library/react';
import { Projects } from './Projects';
import type { Project } from '../../types';

vi.mock('framer-motion', () => import('../../__mocks__/framer-motion'));

const featuredProject: Project = {
  id: 'proj-featured',
  title: 'Platform X',
  description: 'A featured enterprise platform.',
  highlights: ['99.9% uptime', 'Multi-region deployment'],
  impact: 'Reduced MTTR by 60%.',
  technologies: ['Kubernetes', 'React'],
  featured: true,
  liveUrl: 'https://platformx.example.com',
};

const regularProject: Project = {
  id: 'proj-regular',
  title: 'Tool Y',
  description: 'An internal developer tool.',
  highlights: ['Saved 4h/week per engineer'],
  impact: 'Boosted developer productivity.',
  technologies: ['Python', 'FastAPI'],
  featured: false,
  githubUrl: 'https://github.com/org/tool-y',
};

describe('Projects', () => {
  it('Projects_render_doesNotThrow', () => {
    // Arrange, Act & Assert
    expect(() => render(<Projects projects={[featuredProject, regularProject]} />)).not.toThrow();
  });

  it('Projects_render_sectionHasCorrectId', () => {
    // Arrange & Act
    render(<Projects projects={[featuredProject, regularProject]} />);

    // Assert
    expect(document.getElementById('projects')).toBeInTheDocument();
  });

  it('Projects_render_showsFeaturedLabel_forFeaturedProject', () => {
    // Arrange & Act
    render(<Projects projects={[featuredProject, regularProject]} />);

    // Assert — getAllByText because parent elements' textContent also contains 'featured'
    expect(screen.getAllByText(/featured/i).length).toBeGreaterThanOrEqual(1);
  });

  it('Projects_render_showsAllProjectTitles', () => {
    // Arrange & Act
    render(<Projects projects={[featuredProject, regularProject]} />);

    // Assert
    expect(screen.getByText(featuredProject.title)).toBeInTheDocument();
    expect(screen.getByText(regularProject.title)).toBeInTheDocument();
  });

  it('Projects_render_showsProjectDescriptions', () => {
    // Arrange & Act
    render(<Projects projects={[featuredProject, regularProject]} />);

    // Assert
    expect(screen.getByText(featuredProject.description)).toBeInTheDocument();
    expect(screen.getByText(regularProject.description)).toBeInTheDocument();
  });

  it('Projects_render_showsImpactCallout', () => {
    // Arrange & Act
    render(<Projects projects={[featuredProject, regularProject]} />);

    // Assert
    expect(screen.getByText(featuredProject.impact)).toBeInTheDocument();
  });

  it('Projects_render_showsTechBadges', () => {
    // Arrange & Act
    render(<Projects projects={[featuredProject, regularProject]} />);

    // Assert
    featuredProject.technologies.forEach((tech) => {
      expect(screen.getAllByText(tech).length).toBeGreaterThanOrEqual(1);
    });
  });

  it('Projects_render_showsLinkIcon_whenLiveUrlOrGithubUrlPresent', () => {
    // Arrange & Act
    render(<Projects projects={[featuredProject, regularProject]} />);

    // Assert — one external link per project
    const externalLinks = screen.getAllByRole('link');
    expect(externalLinks.length).toBeGreaterThanOrEqual(2);
  });

  it('Projects_noFeaturedRow_whenNoFeaturedProjects', () => {
    // Arrange — only non-featured projects
    render(<Projects projects={[regularProject]} />);

    // Assert — "featured" label should not appear
    expect(screen.queryByText(/featured/i)).not.toBeInTheDocument();
  });

  it('Projects_tiltCard_mouseInteractions_doNotThrow', () => {
    // Arrange
    const { container } = render(<Projects projects={[featuredProject]} />);
    const card = container.querySelector('.h-full') as HTMLElement;

    // Act & Assert — fire mouse events to exercise TiltCard handlers
    expect(() => {
      fireEvent.mouseEnter(card);
      fireEvent.mouseMove(card, { clientX: 100, clientY: 100 });
      fireEvent.mouseLeave(card);
    }).not.toThrow();

    // Post-interaction: project title still visible
    expect(screen.getByText(featuredProject.title)).toBeInTheDocument();
  });
});
