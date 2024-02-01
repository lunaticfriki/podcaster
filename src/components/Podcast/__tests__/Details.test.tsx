import { render, screen } from '../../../test/test-utils';

import Detail from '../Detail';
import { Episode } from '../../../types';
import { Detail as MockDetail } from './__mocks__';

const testProps: Episode = MockDetail;

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
    expect(title).toHaveTextContent(testProps.trackName);
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
