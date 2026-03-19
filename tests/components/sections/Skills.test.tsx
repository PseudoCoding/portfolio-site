import { render, screen } from '@testing-library/react';
import { Skills } from '@/components/sections/Skills';
import type { SkillCategory } from '@/types';

vi.mock('framer-motion', () => import('@mocks/framer-motion'));

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

  it('Skills_render_skillsAreRendered', () => {
    // Arrange & Act
    render(<Skills skills={skills} />);

    // Assert — all skills are rendered (proficiency labels removed in /distill)
    skills.forEach((category) => {
      category.skills.forEach((skill) => {
        expect(screen.getAllByText(skill.name).length).toBeGreaterThanOrEqual(1);
      });
    });
  });
});
