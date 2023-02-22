import { useLocation, useParams } from 'react-router-dom';

import { FC } from 'react';
import List from '../../components/Podcast/List';
import PodcastStyles from './styles/Podcast.module.scss';
import Sidebar from '../../components/Sidebar/Sidebar';
import { fetchPodcast } from '../../utils';
import { useQuery } from '@tanstack/react-query';

const Podcast: FC = () => {
  const { state } = useLocation();
  const { id } = useParams();
  const { isLoading, data } = useQuery(['podcast', id], fetchPodcast);

  if (isLoading && !data) {
    return <div>Loading...</div>;
  } else {
    const { artistName, name, description } = data.attributes;

    return (
      <div className={PodcastStyles.container}>
        <Sidebar
          title={name}
          author={artistName}
          cover={state.image}
          description={description.standard}
        />
        <List
          count={data?.relationships?.episodes.data.length}
          episodes={data?.relationships?.episodes.data}
        />
      </div>
    );
  }
};

export default Podcast;
