import { render, screen } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';
import Header from './Header';
import { HeaderContent } from '../../content';
import { beforeEach } from 'vitest';

describe('Header component test suite', () => {
  const { title } = HeaderContent;
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
  });
  it('should displaty the title', () => {
    const headerTitle = screen.getByTestId('title');
    expect(headerTitle).toHaveTextContent(title);
  });
});
