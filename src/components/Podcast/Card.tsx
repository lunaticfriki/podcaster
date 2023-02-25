import { FC } from 'react';
import { Link } from 'react-router-dom';

import { PathsContent } from '../../content';
import CardStyles from './Card.module.scss';
interface CardProps {
  title: string;
  image: string;
  author: string;
  id: string;
  description: string;
}

const Card: FC<CardProps> = ({ title, image, author, id, description }) => {
  const { podcast } = PathsContent;

  return (
    <Link to={`${podcast}${id}`} state={{ title, image, author, id, description }}>
      <article className={CardStyles.container}>
        <img src={image} alt={title} />
        <div className={CardStyles.info}>
          <h3>{title}</h3>
          <p data-testid="author">{author}</p>
        </div>
      </article>
    </Link>
  );
};

export default Card;
