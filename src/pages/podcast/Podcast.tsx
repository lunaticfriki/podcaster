import { Suspense, lazy } from 'react';

import { FC } from 'react';
import Loader from '../../components/common/Loader';
import PodcastStyles from './Podcast.module.scss';
import { fetchPodcast } from '../../utils';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

const List = lazy(() => import('../../components/Podcast/List'));
const Sidebar = lazy(() => import('../../components/Sidebar/Sidebar'));

const Podcast: FC = () => {
  const { id } = useParams();
  const { isLoading, data } = useQuery(['podcast', id], fetchPodcast);

  if (isLoading && !data) {
    return <Loader />;
  } else {
    const podcast = data?.mainPodcastInfo.feed.entry.find(
      (entry: any) => entry.id.attributes['im:id'] === id
    );

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
  }
};

export default Podcast;
