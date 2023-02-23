import { fireEvent, render, screen } from '@testing-library/react';

import Search from './Search';
import { vi } from 'vitest';

describe('Search component test suite', () => {
  const fn = vi.fn();

  beforeEach(() => {
    render(<Search fn={fn} />);
  });
  it('should render correctly', () => {
    const input = screen.getByTestId('input');
    expect(input).toBeInTheDocument();
  });
  it('should search podcasts', () => {
    const input = screen.getByTestId('input');
    fireEvent.change(input, { target: { value: 'test' } });
    expect(fn).toHaveBeenCalled();
  });
});
