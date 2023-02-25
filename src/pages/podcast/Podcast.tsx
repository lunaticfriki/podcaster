import { useQuery } from '@tanstack/react-query';
import { lazy, Suspense } from 'react';
import { FC } from 'react';
import { useParams } from 'react-router-dom';

import Loader from '../../components/common/Loader';
import { Entry } from '../../types';
import { fetchPodcast } from '../../utils';
import ErrorPage from '../ErrorPage';
import PodcastStyles from './Podcast.module.scss';

const List = lazy(() => import('../../components/Podcast/List'));
const Sidebar = lazy(() => import('../../components/Sidebar/Sidebar'));

const Podcast: FC = () => {
  const { id } = useParams();
  const { isLoading, data } = useQuery(['podcast', id], fetchPodcast);

  if (isLoading && !data) {
    return <Loader />;
  }
  const podcast = data?.mainPodcastInfo.feed.entry.find((entry: Entry) => entry.id.attributes['im:id'] === id);

  if (!data?.episodes.length) {
    return <ErrorPage />;
  }

  return (
    <Suspense>
      <div className={PodcastStyles.container}>
        <Sidebar
          title={data?.info.results[0].trackName}
          author={data?.info.results[0].artistName}
          cover={data?.info.results[0].artworkUrl600}
          description={podcast?.summary.label}
          id={podcast?.id.attributes['im:id']}
        >
          <Suspense>
            <List count={data?.info.resultCount} episodes={data?.episodes} />
          </Suspense>
        </Sidebar>
      </div>
    </Suspense>
  );
};

export default Podcast;
