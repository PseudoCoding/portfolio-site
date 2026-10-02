import { render, screen } from '@testing-library/react';
import { NetworkPage } from '@/NetworkPage';

describe('NetworkPage', () => {
  it('NetworkPage_render_showsNetworkDiagram', () => {
    render(<NetworkPage />);

    expect(screen.getByRole('heading', { name: 'Network' })).toBeInTheDocument();
    expect(screen.getByTestId('network-diagram')).toHaveAttribute('data-view-id', 'network');
  });
});