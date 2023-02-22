import { Detail } from '../../../server/src/feed/detail-types';
import { FC } from 'react';
import ListStyles from './List.module.scss';
import { getDuration } from '../../utils';
interface ListProps {
  count: string;
  episodes: Detail[];
}

const List: FC<ListProps> = ({ count, episodes }) => {
  if (!episodes) return <h4>Loading...</h4>;

  return (
    <div className={ListStyles.container}>
      <p>Episodes: {count}</p>
      {episodes.map((el) => (
        <div key={el.id}>
          <h4>{el.attributes?.name}</h4>
          <h5>{el.attributes?.releaseDateTime}</h5>
          <h5>{getDuration(el.attributes?.durationInMilliseconds)}</h5>
        </div>
      ))}
    </div>
  );
};

export default List;
