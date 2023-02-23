import { Suspense, lazy } from 'react';

import { FC } from 'react';
import Loader from '../../components/common/Loader';
import PodcastStyles from './styles/Podcast.module.scss';
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
    const { artistName, name, description, image } = data.attributes;

    return (
      <div className={PodcastStyles.container}>
        <Suspense>
          <Sidebar
            title={name}
            author={artistName}
            cover={image[2].label}
            description={description.standard}
          >
            <Suspense>
              <List
                count={data?.relationships?.episodes.data.length}
                episodes={data?.relationships?.episodes.data}
              />
            </Suspense>
          </Sidebar>
        </Suspense>
      </div>
    );
  }
};

export default Podcast;
