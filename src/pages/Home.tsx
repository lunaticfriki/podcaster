import Card from '../components/Podcast/Card';
import { FC } from 'react';
import HomeStyles from './styles/Home.module.scss';
import Loader from '../components/common/Loader';
import Search from '../components/search/Search';
import { fetchPodcasts } from '../utils';
import { useQuery } from '@tanstack/react-query';

const Home: FC = () => {
  const { isLoading, data } = useQuery(['podcasts'], fetchPodcasts);

  if (isLoading) return <Loader />;

  return (
    <div className={HomeStyles.container}>
      <Search />
      <div className={HomeStyles.cardList}>
        {data.feed?.entry.map((el: any) => (
          <Card
            key={el.id.attributes['im:id']}
            title={el.title.label}
            author={el['im:artist'].label}
            image={el['im:image'][2].label}
            id={el.id.attributes['im:id']}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
