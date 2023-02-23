import { EpisodesData } from '../../../server/src/feed/detail-types';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import ListElement from './ListElement';
import ListStyles from './List.module.scss';
import { getDuration } from '../../utils';
import { useParams } from 'react-router-dom';
interface ListProps {
  count: string;
  episodes: EpisodesData[];
}

const List: FC<ListProps> = ({ count, episodes }) => {
  const { id } = useParams();

  if (!episodes) return <h4>Loading...</h4>;

  return (
    <div className={ListStyles.container}>
      <p>Episodes: {count}</p>
      <ul>
        {episodes.map((el) => (
          <Link to={`/podcast/${id}/episode/${el.id}`} key={el.id}>
            <ListElement
              name={el.attributes?.name}
              date={el.attributes?.releaseDateTime.slice(0, 10)}
              duration={getDuration(el.attributes?.durationInMilliseconds)}
            />
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default List;
