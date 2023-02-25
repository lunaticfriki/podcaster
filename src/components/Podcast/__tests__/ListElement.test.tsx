import { render, screen } from '../../../test/test-utils';

import ListElement from '../ListElement';

interface testPropsI {
  name: string;
  date: string;
  duration: string;
}

const testProps: testPropsI = {
  name: 'test name',
  date: 'test date',
  duration: 'test duration',
};

describe('ListElement component test suite', () => {
  beforeEach(() => render(<ListElement {...testProps} />));

  it('should render correctly', () => {
    const listElement = screen.getByTestId('list-element');
    expect(listElement).toBeInTheDocument();
  });

  it('should dsiplay the info', () => {
    const info = screen.getAllByRole('heading');
    expect(info[0]).toHaveTextContent(testProps.name);
    expect(info[1]).toHaveTextContent(testProps.date);
    expect(info[2]).toHaveTextContent(testProps.duration);
  });
});
