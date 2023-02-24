import { render, screen } from '../../../test/test-utils';

import Card from '../Card';

interface testPropsI {
  title: string;
  image: string;
  author: string;
  id: string;
}

const testProps: testPropsI = {
  title: 'Test Title',
  image: 'url',
  author: 'Test Author',
  id: '1',
};

describe('Card component test suite', () => {
  beforeEach(() => {
    render(<Card {...testProps} />);
  });

  it('should render correctly', () => {
    const card = screen.getByRole('article');
    expect(card).toBeInTheDocument();
  });

  it('should display an image', () => {
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', testProps.image);
    expect(image).toHaveAttribute('alt', testProps.title);
  });

  it('should display an title', () => {
    const title = screen.getByRole('heading');
    expect(title).toHaveTextContent(testProps.title);
  });

  it('should display an author', () => {
    const author = screen.getByTestId('author');
    expect(author).toHaveTextContent(testProps.author);
  });
});
