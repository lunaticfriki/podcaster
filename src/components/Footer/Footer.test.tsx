import { render, screen } from '../../test/test-utils';

import Footer from './Footer';
import { FooterContent } from '../../content/';

describe('Footer component test suite', () => {
  const { github_url, signature, year } = FooterContent;

  beforeEach(() => {
    render(<Footer />);
  });
  it('should display the signature', () => {
    const footerSignature = screen.getByTestId('signature');
    expect(footerSignature).toHaveTextContent(signature);
  });
  it('should display the year correctly', () => {
    const footerYear = screen.getByTestId('year');
    expect(footerYear).toHaveTextContent(year.toString());
  });
  it('should redirect to github page', () => {
    const footerYear = screen.getByTestId('signature');
    expect(footerYear).toHaveAttribute('href', github_url);
  });
});
