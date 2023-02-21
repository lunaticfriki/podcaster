import CardStyles from './Card.module.scss';
import { FC } from 'react';
import { Link } from 'react-router-dom';
interface CardProps {
  title: string;
  image: string;
  author: string;
  id: string;
}

const Card: FC<CardProps> = ({ title, image, author, id }) => {
  return (
    <Link to={`/podcast/${id}`}>
      <article className={CardStyles.container}>
        <h3>{title}</h3>
        <img src={image} alt={title} />
        <p>{author}</p>
      </article>
    </Link>
  );
};

export default Card;
