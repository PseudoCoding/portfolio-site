import { render, screen } from '@testing-library/react';
import { EducationAndCerts } from '@/components/sections/EducationAndCerts';
import type { EducationEntry, Certification } from '@/types';

vi.mock('framer-motion', () => import('@mocks/framer-motion'));

const education: EducationEntry[] = [
  {
    institution: 'State University',
    degree: 'B.S.',
    field: 'Computer Science',
    year: '2014',
    highlights: ['Dean\'s List', 'Senior capstone project'],
  },
];

const certifications: Certification[] = [
  {
    name: 'Cloud Practitioner',
    issuer: 'AWS',
    year: '2023',
    credentialId: 'CP-12345',
    icon: 'Award',
  },
  {
    name: 'AZ-900',
    issuer: 'Microsoft',
    year: '2022',
  },
];

describe('EducationAndCerts', () => {
  it('EducationAndCerts_render_doesNotThrow', () => {
    // Arrange, Act & Assert
    expect(() => render(<EducationAndCerts education={education} certifications={certifications} />)).not.toThrow();
  });

  it('EducationAndCerts_render_sectionHasCorrectId', () => {
    // Arrange & Act
    render(<EducationAndCerts education={education} certifications={certifications} />);

    // Assert
    expect(document.getElementById('education')).toBeInTheDocument();
  });

  it('EducationAndCerts_render_showsInstitutionName', () => {
    // Arrange & Act
    render(<EducationAndCerts education={education} certifications={certifications} />);

    // Assert
    expect(screen.getByText('State University')).toBeInTheDocument();
  });

  it('EducationAndCerts_render_showsDegreeAndField', () => {
    // Arrange & Act
    render(<EducationAndCerts education={education} certifications={certifications} />);

    // Assert
    expect(screen.getByText(/B\.S\. in Computer Science/i)).toBeInTheDocument();
  });

  it('EducationAndCerts_render_showsGraduationYear', () => {
    // Arrange & Act
    render(<EducationAndCerts education={education} certifications={certifications} />);

    // Assert
    expect(screen.getByText('2014')).toBeInTheDocument();
  });

  it('EducationAndCerts_render_showsCertificationNames', () => {
    // Arrange & Act
    render(<EducationAndCerts education={education} certifications={certifications} />);

    // Assert
    certifications.forEach((cert) => {
      expect(screen.getByText(cert.name)).toBeInTheDocument();
    });
  });

  it('EducationAndCerts_render_showsCertificationIssuers', () => {
    // Arrange & Act
    render(<EducationAndCerts education={education} certifications={certifications} />);

    // Assert
    certifications.forEach((cert) => {
      expect(screen.getByText(cert.issuer)).toBeInTheDocument();
    });
  });

  it('EducationAndCerts_render_showsCredentialId_whenProvided', () => {
    // Arrange & Act
    render(<EducationAndCerts education={education} certifications={certifications} />);

    // Assert
    expect(screen.getByText(/CP-12345/)).toBeInTheDocument();
  });

  it('EducationAndCerts_render_doesNotShowCredentialId_whenAbsent', () => {
    // Arrange — second cert has no credentialId
    render(<EducationAndCerts education={education} certifications={certifications} />);

    // Assert — only one "ID:" label visible (for the cert that has one)
    expect(screen.getAllByText(/^ID:/)).toHaveLength(1);
  });
});
