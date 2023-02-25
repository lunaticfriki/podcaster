import { FC } from 'react';

import ListElementStyles from './ListElement.module.scss';

interface ListElementProps {
  name: string;
  date: string;
  duration: string;
}

const ListElement: FC<ListElementProps> = ({ name, date, duration }) => {
  return (
    <li className={ListElementStyles.element} data-testid="list-element">
      <h4>{name}</h4>
      <h5>{date}</h5>
      <h5>{duration}</h5>
    </li>
  );
};

export default ListElement;
