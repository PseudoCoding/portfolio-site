import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Experience } from '@/components/sections/Experience';
import type { ExperienceConfig } from '@/types';

vi.mock('framer-motion', () => import('@mocks/framer-motion'));

const config: ExperienceConfig = {
  tagline: 'A career building resilient systems.',
  entries: [
    {
      id: 'job-1',
      company: 'Acme Corp',
      companyUrl: 'https://acme.example.com',
      role: 'Senior Engineer',
      period: '2022 – Present',
      summary: 'Led platform migrations.',
      highlights: ['Reduced latency by 40%', 'Shipped 12 features'],
      technologies: ['TypeScript', 'React', 'AWS'],
    },
    {
      id: 'job-2',
      company: 'Beta Inc',
      role: 'Software Engineer',
      period: '2018 – 2022',
      summary: 'Built backend services.',
      highlights: ['Designed REST APIs', 'Wrote over 500 unit tests'],
      technologies: ['Node.js', 'PostgreSQL'],
    },
  ],
};

describe('Experience', () => {
  it('Experience_render_doesNotThrow', () => {
    // Arrange, Act & Assert
    expect(() => render(<Experience config={config} />)).not.toThrow();
  });

  it('Experience_render_sectionHasCorrectId', () => {
    // Arrange & Act
    render(<Experience config={config} />);

    // Assert
    expect(document.getElementById('experience')).toBeInTheDocument();
  });

  it('Experience_render_showsAllCompanyNames', () => {
    // Arrange & Act
    render(<Experience config={config} />);

    // Assert
    config.entries.forEach((entry) => {
      expect(screen.getByText(entry.company)).toBeInTheDocument();
    });
  });

  it('Experience_render_showsAllRoles', () => {
    // Arrange & Act
    render(<Experience config={config} />);

    // Assert
    config.entries.forEach((entry) => {
      expect(screen.getByText(entry.role)).toBeInTheDocument();
    });
  });

  it('Experience_render_showsAllPeriods', () => {
    // Arrange & Act
    render(<Experience config={config} />);

    // Assert
    config.entries.forEach((entry) => {
      expect(screen.getByText(entry.period)).toBeInTheDocument();
    });
  });

  it('Experience_firstCard_isExpandedByDefault', () => {
    // Arrange & Act
    render(<Experience config={config} />);

    // Assert — first entry's highlights are visible
    config.entries[0].highlights.forEach((h) => {
      expect(screen.getByText(h)).toBeInTheDocument();
    });
  });

  it('Experience_toggleHighlights_expandsCollapsedCard', async () => {
    // Arrange
    const user = userEvent.setup();
    render(<Experience config={config} />);

    // Act — second card starts collapsed; click its toggle
    const toggleButtons = screen.getAllByRole('button', { name: /show highlights/i });
    await user.click(toggleButtons[0]);

    // Assert — highlights become visible
    config.entries[1].highlights.forEach((h) => {
      expect(screen.getByText(h)).toBeInTheDocument();
    });
  });

  it('Experience_render_showsTechBadgesForEachEntry', () => {
    // Arrange & Act
    render(<Experience config={config} />);

    // Assert
    config.entries.forEach((entry) => {
      entry.technologies.forEach((tech) => {
        expect(screen.getAllByText(tech).length).toBeGreaterThanOrEqual(1);
      });
    });
  });
});
