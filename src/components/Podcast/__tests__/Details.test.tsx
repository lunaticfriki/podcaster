import { render, screen } from '../../../test/test-utils';

import Detail from '../Detail';
import { EpisodeAttributes } from '../../../../server/src/feed/detail-types';
import { Detail as MockDetail } from '../../../../server/src/feed/mocks/detail';

const testProps: EpisodeAttributes = MockDetail.data[0].relationships.episodes.data[0].attributes;

describe('Detail component test suite', () => {
  beforeEach(() => {
    render(<Detail episodeDetail={testProps} />);
  });

  it('should render correctly', () => {
    const detail = screen.getByTestId('detail');
    expect(detail).toBeInTheDocument();
  });
  it('should display the podcast title', () => {
    const title = screen.getByRole('heading');
    expect(title).toHaveTextContent(testProps.name);
  });
  it('should display the podcast description', () => {
    const description = screen.getByTestId('description');
    expect(description).toBeInTheDocument();
  });
  it('should display an audio player', () => {
    const audio = screen.getByTestId('audio');
    expect(audio).toBeInTheDocument();
  });
});
