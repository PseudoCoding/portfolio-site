import { render } from '@testing-library/react';
import { ScrollProgress } from './ScrollProgress';

vi.mock('framer-motion', () => import('../../__mocks__/framer-motion'));

describe('ScrollProgress', () => {
  it('ScrollProgress_renders_progressElementWithCorrectId', () => {
    // Arrange & Act
    const { container } = render(<ScrollProgress />);

    // Assert
    expect(container.querySelector('#scroll-progress')).toBeInTheDocument();
  });

  it('ScrollProgress_renders_singleTopLevelElement', () => {
    // Arrange & Act
    const { container } = render(<ScrollProgress />);

    // Assert — only one child rendered inside the container
    expect(container.children).toHaveLength(1);
  });
});
