import { render, screen } from '../../test/test-utils';

import Sidebar from './Sidebar';

interface testPropsI {
  title: string;
  author: string;
  cover: string;
  description: string | JSX.Element | JSX.Element[];
  children: React.ReactNode;
  id?: string;
}

const testProps: testPropsI = {
  title: 'test title',
  author: 'test author',
  cover: 'test cover',
  description: 'test description',
  children: <h1>Test child</h1>,
  id: 'test id',
};
describe('Sidebar component test suite', () => {
  beforeEach(() => render(<Sidebar {...testProps} />));

  it('should render correctly', () => {
    const sidebar = screen.getByTestId('sidebar');
    expect(sidebar).toBeInTheDocument();
  });

  it('should display the cover', () => {
    const cover = screen.getByRole('img');
    expect(cover).toBeInTheDocument();
  });

  it('should display the title', () => {
    const title = screen.getByTestId('title');
    expect(title).toBeInTheDocument();
  });

  it('should display the description', () => {
    const description = screen.getByTestId('description');
    expect(description).toBeInTheDocument();
  });
});
