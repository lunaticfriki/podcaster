import BackButton from '../common/BackButton';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import ListElement from './ListElement';
import { ListProps } from '../../types';
import ListStyles from './List.module.scss';
import Loader from '../common/Loader';
import { getDuration } from '../../utils';
import { useParams } from 'react-router-dom';

const List: FC<ListProps> = ({ count, episodes }) => {
  const { id } = useParams();

  if (!episodes) return <Loader />;

  return (
    <div className={ListStyles.container} data-testid="list">
      <p>Episodes: {count}</p>
      <ul>
        {episodes.map((el) => (
          <Link to={`/podcast/${id}/episode/${el.trackId}`} key={el.trackName}>
            <ListElement
              name={el.trackName}
              date={el.releaseDate.slice(0, 10)}
              duration={getDuration(el.trackTimeMillis)}
            />
          </Link>
        ))}
      </ul>
      <BackButton />
    </div>
  );
};

export default List;
