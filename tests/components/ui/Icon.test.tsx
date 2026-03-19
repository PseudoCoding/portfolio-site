import { render } from '@testing-library/react';
import { DynamicIcon } from '@/components/ui/Icon';

describe('DynamicIcon', () => {
  it('DynamicIcon_knownIconName_rendersAnSvgElement', () => {
    // Arrange & Act
    const { container } = render(<DynamicIcon name="Cloud" />);

    // Assert
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it('DynamicIcon_unknownIconName_rendersCircleFallback', () => {
    // Arrange & Act — "Circle" is the fallback; an unregistered name should still produce an svg
    const { container } = render(<DynamicIcon name="__does_not_exist__" />);

    // Assert
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it('DynamicIcon_sizeprop_forwardsToLucideIcon', () => {
    // Arrange & Act
    const { container } = render(<DynamicIcon name="Cloud" size={32} />);

    // Assert — Lucide sets width/height attributes on the svg
    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('width', '32');
    expect(svg).toHaveAttribute('height', '32');
  });

  it('DynamicIcon_classNameProp_forwardsToLucideIcon', () => {
    // Arrange & Act
    const { container } = render(<DynamicIcon name="Cloud" className="text-cyan-400" />);

    // Assert
    const svg = container.querySelector('svg');
    expect(svg).toHaveClass('text-cyan-400');
  });

  it('DynamicIcon_everyRegisteredIconName_rendersSvg', () => {
    // Arrange — all icon names that are expected to be in the registry
    const registeredNames = [
      'Cloud', 'Terminal', 'Layout', 'GitBranch', 'Network', 'Shield',
      'Award', 'Monitor', 'Server', 'Package', 'GitMerge', 'Database',
      'Activity', 'FlaskConical', 'Bot', 'Users', 'BookOpen',
      'GraduationCap', 'Zap', 'Mountain', 'Wind', 'Box', 'Layers',
      'Gamepad2', 'Star', 'Circle',
    ];

    registeredNames.forEach((name) => {
      // Act
      const { container } = render(<DynamicIcon name={name} />);

      // Assert
      expect(container.querySelector('svg')).toBeInTheDocument();
    });
  });
});
