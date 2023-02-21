import { useLocation, useParams } from 'react-router-dom';

import { FC } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import { fetchPodcast } from '../../fetchPodcasts';
import { useQuery } from '@tanstack/react-query';

const Podcast: FC = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const { isLoading, data } = useQuery(['podcast', id], fetchPodcast);

  if (isLoading && !data) {
    return <div>Loading...</div>;
  } else {
    const podcast = JSON.parse(data.contents);

    const { artistName, trackName, artworkUrl600 } = podcast.results[0];
    const { summary } = state;

    return (
      <Sidebar title={trackName} author={artistName} cover={artworkUrl600} description={summary} />
    );
  }
};

export default Podcast;
