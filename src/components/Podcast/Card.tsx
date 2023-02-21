import CardStyles from './Card.module.scss';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { PathsContent } from '../../content';
interface CardProps {
  title: string;
  image: string;
  author: string;
  summary: string;
  id: string;
}

const Card: FC<CardProps> = ({ title, image, author, summary, id }) => {
  const { podcast } = PathsContent;

  return (
    <Link to={`${podcast} ${id}`} state={{ summary }}>
      <article className={CardStyles.container}>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{author}</p>
      </article>
    </Link>
  );
};

export default Card;
