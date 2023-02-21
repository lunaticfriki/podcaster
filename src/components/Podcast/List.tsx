import { FC } from 'react';
import ListStyles from './List.module.scss';

interface ListProps {
  count: string;
}

const List: FC<ListProps> = ({ count }) => {
  return (
    <div className={ListStyles.container}>
      <p>Episodes: {count}</p>
    </div>
  );
};

export default List;
