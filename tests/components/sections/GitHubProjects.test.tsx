import { render, screen } from '@testing-library/react';
import { GitHubProjects } from '@/components/sections/GitHubProjects';
import type { GitHubProject } from '@/types';

vi.mock('framer-motion', () => import('@mocks/framer-motion'));

const liveProject: GitHubProject = {
  id: 'live-proj',
  title: 'Useful 2.0',
  repo: 'PseudoCoding/useful-2.0',
  description: 'An open-source internal resource hub.',
  languages: ['TypeScript', 'CSS'],
  technologies: ['React', 'Vite'],
  liveUrl: 'https://useful.example.com',
};

const comingSoonProject: GitHubProject = {
  id: 'wip-proj',
  title: 'Secret Project',
  repo: 'PseudoCoding/secret',
  description: 'Work in progress.',
  languages: ['Rust'],
  technologies: ['Tokio'],
  comingSoon: true,
};

describe('GitHubProjects', () => {
  it('GitHubProjects_render_doesNotThrow', () => {
    // Arrange, Act & Assert
    expect(() => render(<GitHubProjects projects={[liveProject, comingSoonProject]} />)).not.toThrow();
  });

  it('GitHubProjects_render_sectionHasCorrectId', () => {
    // Arrange & Act
    render(<GitHubProjects projects={[liveProject, comingSoonProject]} />);

    // Assert
    expect(document.getElementById('github')).toBeInTheDocument();
  });

  it('GitHubProjects_render_showsLiveProjectTitle', () => {
    // Arrange & Act
    render(<GitHubProjects projects={[liveProject, comingSoonProject]} />);

    // Assert
    expect(screen.getAllByText(liveProject.title).length).toBeGreaterThanOrEqual(1);
  });

  it('GitHubProjects_render_showsRepoPath_forLiveProject', () => {
    // Arrange & Act
    render(<GitHubProjects projects={[liveProject]} />);

    // Assert
    expect(screen.getByText(liveProject.repo)).toBeInTheDocument();
  });

  it('GitHubProjects_render_showsLanguagePills', () => {
    // Arrange & Act
    render(<GitHubProjects projects={[liveProject]} />);

    // Assert
    liveProject.languages.forEach((lang) => {
      expect(screen.getByText(lang)).toBeInTheDocument();
    });
  });

  it('GitHubProjects_render_showsLiveDemoLink_whenLiveUrlPresent', () => {
    // Arrange & Act
    render(<GitHubProjects projects={[liveProject]} />);

    // Assert
    expect(screen.getByRole('link', { name: new RegExp(`live demo of ${liveProject.title}`, 'i') }))
      .toHaveAttribute('href', liveProject.liveUrl);
  });

  it('GitHubProjects_render_showsComingSoonLabel_forWipProject', () => {
    // Arrange & Act
    render(<GitHubProjects projects={[liveProject, comingSoonProject]} />);

    // Assert — card badge uses lowercase 'coming soon'; use getAllByText since the
    // section divider also contains that phrase
    expect(screen.getAllByText(/coming soon/i).length).toBeGreaterThanOrEqual(1);
  });

  it('GitHubProjects_render_noComingSoonSection_whenAllProjectsLive', () => {
    // Arrange & Act
    render(<GitHubProjects projects={[liveProject]} />);

    // Assert — "coming soon" divider label should not appear
    expect(screen.queryByText(/\/\/ coming soon/i)).not.toBeInTheDocument();
  });
});
