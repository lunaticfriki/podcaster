import Card from '../components/Podcast/Card';
import { FC } from 'react';
import HomeStyles from './styles/Home.module.scss';
import { fetchPodcasts } from '../fetchPodcasts';
import { useQuery } from '@tanstack/react-query';

const Home: FC = () => {
  const { isLoading, data } = useQuery(['podcasts'], fetchPodcasts);

  if (isLoading) return <div>'loading...'</div>;

  return (
    <div className={HomeStyles.container}>
      {data.feed.entry.map((el: any) => (
        <Card
          key={el.id.attributes['im:id']}
          title={el.title.label}
          author={el['im:artist'].label}
          image={el['im:image'][2].label}
        />
      ))}
    </div>
  );
};

export default Home;
