import { render, screen } from '@testing-library/react';
import { Contact } from './Contact';
import type { ContactConfig, SiteMeta } from '../../types';

vi.mock('framer-motion', () => import('../../__mocks__/framer-motion'));

const meta: SiteMeta = {
  title: 'Test Portfolio',
  description: 'Test',
  githubUrl: 'https://github.com/test',
  linkedinUrl: 'https://linkedin.com/in/test',
  resumeUrl: '/resume.pdf',
};

const contact: ContactConfig = {
  heading: "Let's Work Together",
  subheading: 'Open to new opportunities.',
  email: 'hello@example.com',
};

const contactWithCalendly: ContactConfig = {
  ...contact,
  calendlyUrl: 'https://calendly.com/test/30min',
};

describe('Contact', () => {
  it('Contact_render_doesNotThrow', () => {
    // Arrange, Act & Assert
    expect(() => render(<Contact contact={contact} meta={meta} />)).not.toThrow();
  });

  it('Contact_render_sectionHasCorrectId', () => {
    // Arrange & Act
    render(<Contact contact={contact} meta={meta} />);

    // Assert
    expect(document.getElementById('contact')).toBeInTheDocument();
  });

  it('Contact_render_showsHeading', () => {
    // Arrange & Act
    render(<Contact contact={contact} meta={meta} />);

    // Assert
    expect(screen.getByRole('heading', { name: contact.heading })).toBeInTheDocument();
  });

  it('Contact_render_showsSubheading', () => {
    // Arrange & Act
    render(<Contact contact={contact} meta={meta} />);

    // Assert
    expect(screen.getByText(contact.subheading)).toBeInTheDocument();
  });

  it('Contact_render_showsGitHubLink', () => {
    // Arrange & Act
    render(<Contact contact={contact} meta={meta} />);

    // Assert
    expect(screen.getByRole('link', { name: /github/i })).toHaveAttribute('href', meta.githubUrl);
  });

  it('Contact_render_showsLinkedInLink', () => {
    // Arrange & Act
    render(<Contact contact={contact} meta={meta} />);

    // Assert
    expect(screen.getByRole('link', { name: /linkedin/i })).toHaveAttribute('href', meta.linkedinUrl);
  });

  it('Contact_render_showsEmailLink_whenEmailProvided', () => {
    // Arrange & Act
    render(<Contact contact={contact} meta={meta} />);

    // Assert
    expect(screen.getByRole('link', { name: contact.email })).toHaveAttribute('href', `mailto:${contact.email}`);
  });

  it('Contact_render_noEmailLink_whenEmailAbsent', () => {
    // Arrange
    const noEmail: ContactConfig = { heading: "Let's Talk", subheading: 'Reach out.' };

    // Act
    render(<Contact contact={noEmail} meta={meta} />);

    // Assert
    expect(screen.queryByRole('link', { name: /@/ })).not.toBeInTheDocument();
  });

  it('Contact_render_showsResumeDownloadLink', () => {
    // Arrange & Act
    render(<Contact contact={contact} meta={meta} />);

    // Assert
    const resumeLink = screen.getByRole('link', { name: /download résumé/i });
    expect(resumeLink).toHaveAttribute('href', meta.resumeUrl);
  });

  it('Contact_render_showsCalendlyEmbed_whenCalendlyUrlProvided', () => {
    // Arrange & Act
    render(<Contact contact={contactWithCalendly} meta={meta} />);

    // Assert — iframe embed for Calendly
    const iframe = document.querySelector('iframe[title*="Calendly"]');
    expect(iframe).toBeInTheDocument();
    expect((iframe as HTMLIFrameElement).src).toContain(contactWithCalendly.calendlyUrl);
  });

  it('Contact_render_noCalendlyEmbed_whenCalendlyUrlAbsent', () => {
    // Arrange & Act
    render(<Contact contact={contact} meta={meta} />);

    // Assert
    expect(document.querySelector('iframe')).not.toBeInTheDocument();
  });
});
