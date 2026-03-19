import { render, screen } from '@testing-library/react';
import { SectionHeader } from '@/components/ui/SectionHeader';

vi.mock('framer-motion', () => import('@mocks/framer-motion'));

describe('SectionHeader', () => {
  it('SectionHeader_eyebrowProp_rendersWithCommentPrefix', () => {
    // Arrange & Act
    render(<SectionHeader eyebrow="About Me" headline="My Story" />);

    // Assert
    expect(screen.getByText('// About Me')).toBeInTheDocument();
  });

  it('SectionHeader_headlineProp_rendersHeadlineText', () => {
    // Arrange & Act
    render(<SectionHeader eyebrow="Work" headline="My Experience" />);

    // Assert
    expect(screen.getByRole('heading', { name: 'My Experience' })).toBeInTheDocument();
  });

  it('SectionHeader_subProp_rendersSubText', () => {
    // Arrange & Act
    render(<SectionHeader eyebrow="Skills" headline="What I Know" sub="A summary of my technical skills." />);

    // Assert
    expect(screen.getByText('A summary of my technical skills.')).toBeInTheDocument();
  });

  it('SectionHeader_noSubProp_doesNotRenderSubElement', () => {
    // Arrange & Act
    render(<SectionHeader eyebrow="Projects" headline="My Work" />);

    // Assert — no paragraph element for sub copy
    expect(screen.queryByRole('paragraph')).not.toBeInTheDocument();
  });

  it('SectionHeader_defaultAlign_appliesCenterClasses', () => {
    // Arrange & Act
    const { container } = render(<SectionHeader eyebrow="Default" headline="Centered" />);

    // Assert
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper.className).toContain('text-center');
    expect(wrapper.className).toContain('mx-auto');
  });

  it('SectionHeader_alignLeft_appliesLeftAlignClass', () => {
    // Arrange & Act
    const { container } = render(<SectionHeader eyebrow="Left" headline="Left Aligned" align="left" />);

    // Assert
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper.className).toContain('text-left');
    expect(wrapper.className).not.toContain('text-center');
  });
});
