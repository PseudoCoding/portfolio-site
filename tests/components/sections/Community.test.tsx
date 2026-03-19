import { render, screen } from '@testing-library/react';
import { Community } from '@/components/sections/Community';
import type { CommunityEntry } from '@/types';

vi.mock('framer-motion', () => import('@mocks/framer-motion'));

const entries: CommunityEntry[] = [
  {
    title: 'Tech Talks Organizer',
    description: 'Organized monthly meetups for 200+ engineers.',
    metric: '200+ members',
    icon: 'Users',
  },
  {
    title: 'Open Source Contributor',
    description: 'Regular contributions to OSS tooling.',
    icon: 'GitBranch',
  },
];

describe('Community', () => {
  it('Community_render_doesNotThrow', () => {
    // Arrange, Act & Assert
    expect(() => render(<Community entries={entries} />)).not.toThrow();
  });

  it('Community_render_sectionHasCorrectId', () => {
    // Arrange & Act
    render(<Community entries={entries} />);

    // Assert
    expect(document.getElementById('community')).toBeInTheDocument();
  });

  it('Community_render_showsAllEntryTitles', () => {
    // Arrange & Act
    render(<Community entries={entries} />);

    // Assert
    entries.forEach((entry) => {
      expect(screen.getByText(entry.title)).toBeInTheDocument();
    });
  });

  it('Community_render_showsAllDescriptions', () => {
    // Arrange & Act
    render(<Community entries={entries} />);

    // Assert
    entries.forEach((entry) => {
      expect(screen.getByText(entry.description)).toBeInTheDocument();
    });
  });

  it('Community_render_showsMetricBadge_whenProvided', () => {
    // Arrange & Act
    render(<Community entries={entries} />);

    // Assert
    expect(screen.getByText('200+ members')).toBeInTheDocument();
  });

  it('Community_render_noMetricBadge_whenAbsent', () => {
    // Arrange — second entry has no metric
    render(<Community entries={[entries[1]]} />);

    // Assert
    expect(screen.queryByText(/members/i)).not.toBeInTheDocument();
  });
});
