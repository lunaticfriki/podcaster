import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import { ListProps } from '../../types';
import { getDuration } from '../../utils';
import BackButton from '../common/BackButton';
import Loader from '../common/Loader';
import ListStyles from './List.module.scss';
import ListElement from './ListElement';

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
