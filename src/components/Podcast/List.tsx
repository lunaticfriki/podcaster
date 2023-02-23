import { EpisodesData } from '../../../server/src/feed/detail-types';
import { FC } from 'react';
import ListElement from './ListElement';
import ListStyles from './List.module.scss';
import { getDuration } from '../../utils';
interface ListProps {
  count: string;
  episodes: EpisodesData[];
}

const List: FC<ListProps> = ({ count, episodes }) => {
  if (!episodes) return <h4>Loading...</h4>;

  return (
    <div className={ListStyles.container}>
      <p>Episodes: {count}</p>
      <ul>
        {episodes.map((el) => (
          <ListElement
            key={el.id}
            name={el.attributes?.name}
            date={el.attributes?.releaseDateTime}
            duration={getDuration(el.attributes?.durationInMilliseconds)}
          />
        ))}
      </ul>
    </div>
  );
};

export default List;
