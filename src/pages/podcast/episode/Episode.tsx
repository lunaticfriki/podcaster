import { useQuery } from '@tanstack/react-query';
import { lazy, Suspense } from 'react';
import { FC } from 'react';
import { useParams } from 'react-router-dom';

import Loader from '../../../components/common/Loader';
import Detail from '../../../components/Podcast/Detail';
import { Entry, Episode as EpisodeType } from '../../../types';
import { fetchPodcast } from '../../../utils';
import ErrorPage from '../../ErrorPage';
import EpisodeStyles from './Episode.module.scss';

const Sidebar = lazy(() => import('../../../components/Sidebar/Sidebar'));

const Episode: FC = () => {
  const { episodeId, id } = useParams();
  const { isLoading, data } = useQuery(['podcast', id], fetchPodcast);

  if (isLoading && !data) {
    return <Loader />;
  }

  if (!data?.episodes.length) {
    return <ErrorPage />;
  }

  const podcast = data?.mainPodcastInfo.feed.entry.find((entry: Entry) => entry.id.attributes['im:id'] === id);

  const episode = data?.episodes?.find((el: EpisodeType) => el.trackId.toString() === episodeId);

  return (
    <Suspense>
      <div className={EpisodeStyles.container}>
        {
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
        }
      </div>
    </Suspense>
  );
};

export default Episode;
