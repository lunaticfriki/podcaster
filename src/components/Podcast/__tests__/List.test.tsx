import { render, screen } from '../../../test/test-utils';

import { Episode } from '../../../types';
import List from '../List';
import { List as MockList } from './__mocks__';

const episodeList = MockList;

interface testPropsI {
  count: string;
  episodes: Episode[];
}

const testProps: testPropsI = {
  count: '5',
  episodes: episodeList,
};
describe('List component test suite', () => {
  beforeEach(() => render(<List {...testProps} />));

  it('should render correctly', () => {
    const list = screen.getByTestId('list');
    expect(list).toBeInTheDocument();
  });

  it('should display the list of episodes', () => {
    const list = screen.getAllByTestId('list-element');
    expect(list).toHaveLength(episodeList.length);
  });
});
