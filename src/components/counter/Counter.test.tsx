import { render, screen } from '../../test/test-utils';

import Counter from './Counter';

interface testPropsI {
  count: number;
}

const testProps: testPropsI = {
  count: 4,
};

describe('Counter component test suite', () => {
  render(<Counter {...testProps} />);

  it('should display the counter', () => {
    const counter = screen.getByTestId('counter');
    expect(counter).toHaveTextContent(testProps.count.toString());
  });
});
