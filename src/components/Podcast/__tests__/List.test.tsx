import { render, screen } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';
import { Detail } from '../../../../server/src/feed/mocks/detail';
import { EpisodesData } from '../../../../server/src/feed/detail-types';
import List from '../List';

const episodeList = Detail.data[0].relationships.episodes.data;

interface testPropsI {
  count: string;
  episodes: EpisodesData[];
}

const testProps: testPropsI = {
  count: '5',
  episodes: episodeList,
};
describe('List component test suite', () => {
  beforeEach(() =>
    render(
      <BrowserRouter>
        <List {...testProps} />
      </BrowserRouter>
    )
  );

  it('should render correctly', () => {
    const list = screen.getByTestId('list');
    expect(list).toBeInTheDocument();
  });

  it('should display the list of episodes', () => {
    const list = screen.getAllByTestId('list-element');
    expect(list).toHaveLength(episodeList.length);
  });
});
