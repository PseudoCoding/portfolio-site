import { render, screen } from '@testing-library/react';
import { Skills } from './Skills';
import type { SkillCategory } from '../../types';

vi.mock('framer-motion', () => import('../../__mocks__/framer-motion'));

const skills: SkillCategory[] = [
  {
    category: 'Frontend',
    icon: 'Layout',
    skills: [
      { name: 'React', level: 5 },
      { name: 'TypeScript', level: 4 },
      { name: 'CSS', level: 3 },
    ],
  },
  {
    category: 'Cloud',
    icon: 'Cloud',
    skills: [
      { name: 'AWS', level: 4 },
      { name: 'Azure', level: 3 },
    ],
  },
];

describe('Skills', () => {
  it('Skills_render_doesNotThrow', () => {
    // Arrange, Act & Assert
    expect(() => render(<Skills skills={skills} />)).not.toThrow();
  });

  it('Skills_render_sectionHasCorrectId', () => {
    // Arrange & Act
    render(<Skills skills={skills} />);

    // Assert
    expect(document.getElementById('skills')).toBeInTheDocument();
  });

  it('Skills_render_showsAllCategoryNames', () => {
    // Arrange & Act
    render(<Skills skills={skills} />);

    // Assert
    skills.forEach((cat) => {
      expect(screen.getByText(cat.category)).toBeInTheDocument();
    });
  });

  it('Skills_render_showsAllSkillNames', () => {
    // Arrange & Act
    render(<Skills skills={skills} />);

    // Assert
    skills.flatMap((cat) => cat.skills).forEach((skill) => {
      expect(screen.getByText(skill.name)).toBeInTheDocument();
    });
  });

  it('Skills_render_showsProficiencyLabels', () => {
    // Arrange & Act
    render(<Skills skills={skills} />);

    // Assert — level 5 = "Expert", level 4 = "Advanced"
    expect(screen.getAllByText('Expert').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('Advanced').length).toBeGreaterThanOrEqual(1);
  });
});
