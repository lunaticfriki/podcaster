import { Suspense, lazy, useEffect } from 'react';

import Detail from '../../../components/Podcast/Detail';
import EpisodeStyles from './Episode.module.scss';
import { EpisodesData } from '../../../../server/src/feed/detail-types';
import ErrorPage from '../../ErrorPage';
import { FC } from 'react';
import Loader from '../../../components/common/Loader';
import { fetchPodcast } from '../../../utils';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

const Sidebar = lazy(() => import('../../../components/Sidebar/Sidebar'));

const Episode: FC = () => {
  const { episodeId, id } = useParams();
  const { isLoading, data } = useQuery(['podcast', id], fetchPodcast);

  if (isLoading && !data) {
    return <Loader />;
  } else {
    const podcast = data?.mainPodcastInfo.feed.entry.find(
      (entry: any) => entry.id.attributes['im:id'] === id
    );

    const episode = data?.episodes?.find((el: any) => el.trackId.toString() === episodeId);

    return (
      <Suspense>
        <div className={EpisodeStyles.container}>
          {true ? (
            <Sidebar
              title={data?.info.results[0].trackName}
              author={data?.info.results[0].artistName}
              cover={data?.info.results[0].artworkUrl600}
              description={podcast?.summary.label}
              id={podcast?.id.attributes['im:id']}
            >
              <Suspense>
                <Detail episodeDetail={episode} />
              </Suspense>
            </Sidebar>
          ) : (
            <ErrorPage />
          )}
        </div>
      </Suspense>
    );
  }
};

export default Episode;
