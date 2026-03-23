import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Footer } from '@/components/layout/Footer';
import type { SiteMeta } from '@/types';

const meta: SiteMeta = {
  title: 'Test Portfolio',
  description: 'Test',
  githubUrl: 'https://github.com/test',
  linkedinUrl: 'https://linkedin.com/in/test',
  resumeUrl: 'https://resume.r2.pseudocoding.xyz/devinhoude-resume.pdf',
};

describe('Footer', () => {
  it('Footer_render_doesNotThrow', () => {
    // Arrange, Act & Assert
    expect(() => render(<Footer meta={meta} />)).not.toThrow();
  });

  it('Footer_render_includesGitHubLink', () => {
    // Arrange & Act
    render(<Footer meta={meta} />);

    // Assert
    const link = screen.getByRole('link', { name: /github/i });
    expect(link).toHaveAttribute('href', meta.githubUrl);
  });

  it('Footer_render_includesLinkedInLink', () => {
    // Arrange & Act
    render(<Footer meta={meta} />);

    // Assert
    const link = screen.getByRole('link', { name: /linkedin/i });
    expect(link).toHaveAttribute('href', meta.linkedinUrl);
  });

  it('Footer_render_showsCopyrightText', () => {
    // Arrange & Act
    render(<Footer meta={meta} />);

    // Assert
    expect(screen.getByText(/pseudocoding/i)).toBeInTheDocument();
  });

  it('Footer_backToTopButton_exists', () => {
    // Arrange & Act
    render(<Footer meta={meta} />);

    // Assert
    expect(screen.getByRole('button', { name: /back to top/i })).toBeInTheDocument();
  });

  it('Footer_backToTopButton_click_callsScrollToTop', async () => {
    // Arrange
    const user = userEvent.setup();
    const scrollSpy = vi.spyOn(window, 'scrollTo').mockImplementation(() => {});
    render(<Footer meta={meta} />);

    // Act
    await user.click(screen.getByRole('button', { name: /back to top/i }));

    // Assert
    expect(scrollSpy).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
    scrollSpy.mockRestore();
  });
});
