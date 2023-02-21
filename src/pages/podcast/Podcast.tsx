import { useLocation, useParams } from 'react-router-dom';

import { FC } from 'react';
import List from '../../components/Podcast/List';
import PodcastStyles from './styles/Podcast.module.scss';
import Sidebar from '../../components/Sidebar/Sidebar';
import { fetchPodcast } from '../../utils';
import { useQuery } from '@tanstack/react-query';

const Podcast: FC = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const { isLoading, data } = useQuery(['podcast', id], fetchPodcast);

  if (isLoading && !data) {
    return <div>Loading...</div>;
  } else {
    const podcast = JSON.parse(data.contents);

    const { artistName, trackName, artworkUrl600, trackCount } = podcast.results[0];
    const { summary } = state;

    console.log(podcast);

    return (
      <div className={PodcastStyles.container}>
        <Sidebar
          title={trackName}
          author={artistName}
          cover={artworkUrl600}
          description={summary}
        />
        <List count={trackCount} />
      </div>
    );
  }
};

export default Podcast;
