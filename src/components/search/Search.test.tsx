import { fireEvent, render, screen } from '@testing-library/react';

import Search from './Search';
import { vi } from 'vitest';

describe('Search component test suite', () => {
  it('should search podcasts', () => {
    const fn = vi.fn();
    render(<Search fn={fn} />);
    const input = screen.getByTestId('input');
    fireEvent.change(input, { target: { value: 'test' } });
    expect(fn).toHaveBeenCalled();
  });
});
