import { render, screen } from '../../test/test-utils';

import Header from './Header';
import { HeaderContent } from '../../content';
import { beforeEach } from 'vitest';

describe('Header component test suite', () => {
  const { title } = HeaderContent;
  beforeEach(() => {
    render(<Header />);
  });
  it('should displaty the title', () => {
    const headerTitle = screen.getByTestId('title');
    expect(headerTitle).toHaveTextContent(title);
  });
});
