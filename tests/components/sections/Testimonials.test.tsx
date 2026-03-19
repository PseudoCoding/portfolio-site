import { render, screen } from '@testing-library/react';
import { Testimonials } from '@/components/sections/Testimonials';
import type { Testimonial } from '@/types';

vi.mock('framer-motion', () => import('@mocks/framer-motion'));

const testimonials: Testimonial[] = [
  {
    quote: 'One of the best engineers I have worked with.',
    author: 'Alice Johnson',
    role: 'Engineering Manager',
    company: 'Acme Corp',
  },
  {
    quote: 'Transformed our CI/CD pipeline.',
    author: 'Bob Smith',
    role: 'CTO',
    company: 'Beta Inc',
    initials: 'BS',
  },
];

describe('Testimonials', () => {
  it('Testimonials_render_doesNotThrow', () => {
    // Arrange, Act & Assert
    expect(() => render(<Testimonials testimonials={testimonials} />)).not.toThrow();
  });

  it('Testimonials_render_sectionHasCorrectId', () => {
    // Arrange & Act
    render(<Testimonials testimonials={testimonials} />);

    // Assert
    expect(document.getElementById('testimonials')).toBeInTheDocument();
  });

  it('Testimonials_render_showsAllQuotes', () => {
    // Arrange & Act
    render(<Testimonials testimonials={testimonials} />);

    // Assert
    testimonials.forEach((t) => {
      expect(screen.getByText(new RegExp(t.quote))).toBeInTheDocument();
    });
  });

  it('Testimonials_render_showsAllAuthors', () => {
    // Arrange & Act
    render(<Testimonials testimonials={testimonials} />);

    // Assert
    testimonials.forEach((t) => {
      expect(screen.getByText(t.author)).toBeInTheDocument();
    });
  });

  it('Testimonials_render_showsRoleAndCompany', () => {
    // Arrange & Act
    render(<Testimonials testimonials={testimonials} />);

    // Assert — role and company are co-located inside a single <p> separated by a
    // dot-sep span, so we match by textContent substring rather than exact text
    testimonials.forEach((t) => {
      expect(screen.getByText((content) => content.includes(t.role))).toBeInTheDocument();
      expect(screen.getByText((content) => content.includes(t.company))).toBeInTheDocument();
    });
  });

  it('Testimonials_render_usesExplicitInitials_whenProvided', () => {
    // Arrange & Act
    render(<Testimonials testimonials={[testimonials[1]]} />);

    // Assert
    expect(screen.getByText('BS')).toBeInTheDocument();
  });

  it('Testimonials_render_derivesInitials_whenNotProvided', () => {
    // Arrange — Alice Johnson → "AJ"
    render(<Testimonials testimonials={[testimonials[0]]} />);

    // Assert
    expect(screen.getByText('AJ')).toBeInTheDocument();
  });

  it('Testimonials_render_emptyList_doesNotThrow', () => {
    // Arrange, Act & Assert
    expect(() => render(<Testimonials testimonials={[]} />)).not.toThrow();
  });
});
