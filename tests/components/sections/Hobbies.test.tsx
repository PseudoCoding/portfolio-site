import { render, screen } from '@testing-library/react';
import { Hobbies } from '@/components/sections/Hobbies';
import type { Hobby } from '@/types';

vi.mock('framer-motion', () => import('@mocks/framer-motion'));

const hobbies: Hobby[] = [
  { name: 'Hiking', icon: 'Mountain', description: 'Exploring trails on weekends.' },
  { name: 'Gaming', icon: 'Gamepad2', description: 'Strategy and indie games.' },
  { name: 'Reading', icon: 'BookOpen', description: 'Non-fiction and sci-fi.' },
];

describe('Hobbies', () => {
  it('Hobbies_render_doesNotThrow', () => {
    // Arrange, Act & Assert
    expect(() => render(<Hobbies hobbies={hobbies} />)).not.toThrow();
  });

  it('Hobbies_render_sectionHasCorrectId', () => {
    // Arrange & Act
    render(<Hobbies hobbies={hobbies} />);

    // Assert
    expect(document.getElementById('hobbies')).toBeInTheDocument();
  });

  it('Hobbies_render_showsAllHobbyNames', () => {
    // Arrange & Act
    render(<Hobbies hobbies={hobbies} />);

    // Assert
    hobbies.forEach((h) => {
      expect(screen.getByText(h.name)).toBeInTheDocument();
    });
  });

  it('Hobbies_render_showsAllDescriptions', () => {
    // Arrange & Act
    render(<Hobbies hobbies={hobbies} />);

    // Assert
    hobbies.forEach((h) => {
      expect(screen.getByText(h.description)).toBeInTheDocument();
    });
  });

  it('Hobbies_render_cyclesThroughAllGradients_withMoreThan6Hobbies', () => {
    // Arrange — 7 hobbies to exceed the 6-gradient cycle
    const manyHobbies: Hobby[] = Array.from({ length: 7 }, (_, i) => ({
      name: `Hobby ${i}`,
      icon: 'Star',
      description: `Description ${i}`,
    }));

    // Act & Assert — should not throw when index wraps via modulo
    expect(() => render(<Hobbies hobbies={manyHobbies} />)).not.toThrow();
  });
});
