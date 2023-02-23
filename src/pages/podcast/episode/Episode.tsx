import { Suspense, lazy } from 'react';

import Detail from '../../../components/Podcast/Detail';
import { EpisodesData } from '../../../../server/src/feed/detail-types';
import { FC } from 'react';
import { fetchPodcast } from '../../../utils';
import parse from 'html-react-parser';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

const Sidebar = lazy(() => import('../../../components/Sidebar/Sidebar'));

const Episode: FC = () => {
  const { episodeId, id } = useParams();
  const { isLoading, data } = useQuery(['podcast', id], fetchPodcast);

  if (isLoading && !data) {
    return <div>Loading...</div>;
  } else {
    const { artistName, name, description, image } = data.attributes;
    const { relationships } = data;

    const episode = relationships?.episodes?.data.find((el: EpisodesData) => el.id === episodeId);

    return (
      <Suspense>
        <Sidebar
          title={name}
          author={artistName}
          cover={image[2].label}
          description={parse(description.standard)}
        >
          <Suspense>
            <Detail episodeDetail={episode.attributes} />
          </Suspense>
        </Sidebar>
      </Suspense>
    );
  }
};

export default Episode;
