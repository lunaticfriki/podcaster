import { useQuery } from '@tanstack/react-query';
import { FC, useEffect, useState } from 'react';

import Loader from '../components/common/Loader';
import Counter from '../components/counter/Counter';
import Card from '../components/Podcast/Card';
import Search from '../components/search/Search';
import { Entry } from '../types';
import { fetchPodcast } from '../utils';
import HomeStyles from './styles/Home.module.scss';

const Home: FC = () => {
  const [search, setSearch] = useState('');
  const [list, setList] = useState<Entry[]>([]);

  const getFilter = (filter: string): void => {
    setSearch(filter);
  };

  const { isLoading, data } = useQuery(['podcast', ''], fetchPodcast);

  useEffect(() => {
    if (search !== '') {
      setList(
        data?.mainPodcastInfo?.feed?.entry.filter(
          (el: Entry) =>
            el.title.label.toLowerCase().includes(search.toLowerCase()) ||
            el['im:artist'].label.toLowerCase().includes(search.toLowerCase()),
        ),
      );
    } else {
      setList(data?.mainPodcastInfo.feed?.entry);
    }
  }, [data, search]);

  if (isLoading) return <Loader />;

  return (
    <div className={HomeStyles.container}>
      <div className={HomeStyles.header}>
        <Counter count={list?.length} />
        <Search fn={getFilter} />
      </div>
      <div className={HomeStyles.cardList}>
        {list && list.length
          ? list.map((el: Entry) => (
              <Card
                key={el.id.attributes['im:id']}
                title={el.title.label}
                author={el['im:artist'].label}
                image={el['im:image'][2].label}
                id={el.id.attributes['im:id']}
              />
            ))
          : null}
      </div>
    </div>
  );
};

export default Home;
