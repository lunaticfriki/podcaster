import { Suspense, lazy } from 'react';

import Detail from '../../../components/Podcast/Detail';
import { EpisodesData } from '../../../../server/src/feed/detail-types';
import ErrorPage from '../../ErrorPage';
import { FC } from 'react';
import Loader from '../../../components/common/Loader';
import { fetchPodcast } from '../../../utils';
import parse from 'html-react-parser';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

const Sidebar = lazy(() => import('../../../components/Sidebar/Sidebar'));

const Episode: FC = () => {
  const { episodeId, id } = useParams();
  const { isLoading, data } = useQuery(['podcast', id], fetchPodcast);

  if (isLoading && !data) {
    return <Loader />;
  } else {
    const { artistName, name, description, image } = data.attributes;
    const { relationships } = data;

    const episode = relationships?.episodes?.data.find((el: EpisodesData) => el.id === episodeId);

    return (
      <Suspense>
        {episode ? (
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
        ) : (
          <ErrorPage />
        )}
      </Suspense>
    );
  }
};

export default Episode;
