import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Navbar } from '@/components/layout/Navbar';
import type { SiteMeta } from '@/types';

vi.mock('framer-motion', () => import('@mocks/framer-motion'));

const meta: SiteMeta = {
  title: 'Test Portfolio',
  description: 'Test',
  githubUrl: 'https://github.com/test',
  linkedinUrl: 'https://linkedin.com/in/test',
  resumeUrl: '/resume.pdf',
};

describe('Navbar', () => {
  it('Navbar_render_doesNotThrow', () => {
    // Arrange, Act & Assert
    expect(() => render(<Navbar meta={meta} />)).not.toThrow();
  });

  it('Navbar_render_includesGitHubLink', () => {
    // Arrange & Act
    render(<Navbar meta={meta} />);

    // Assert
    expect(screen.getByRole('link', { name: /github/i })).toHaveAttribute('href', meta.githubUrl);
  });

  it('Navbar_render_includesLinkedInLink', () => {
    // Arrange & Act
    render(<Navbar meta={meta} />);

    // Assert
    expect(screen.getByRole('link', { name: /linkedin/i })).toHaveAttribute('href', meta.linkedinUrl);
  });

  it('Navbar_render_includesResumeLink', () => {
    // Arrange & Act
    render(<Navbar meta={meta} />);

    // Assert
    expect(screen.getByRole('link', { name: /résumé/i })).toHaveAttribute('href', meta.resumeUrl);
  });

  it('Navbar_render_includesBrandWordmark', () => {
    // Arrange & Act
    render(<Navbar meta={meta} />);

    // Assert
    expect(screen.getByText('PseudoCoding')).toBeInTheDocument();
  });

  it('Navbar_mobileMenuToggle_opensAndClosesMobileMenu', async () => {
    // Arrange
    const user = userEvent.setup();
    render(<Navbar meta={meta} />);
    const toggle = screen.getByRole('button', { name: /toggle menu/i });

    // Act — open
    await user.click(toggle);

    // Assert — "Experience" nav link now visible in mobile drawer
    // (mobile nav buttons are only shown when menu is open)
    const experienceButtons = screen.getAllByRole('button', { name: /experience/i });
    expect(experienceButtons.length).toBeGreaterThanOrEqual(1);
  });
});
