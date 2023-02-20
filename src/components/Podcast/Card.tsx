import CardStyles from './Card.module.scss';
import { FC } from 'react';
interface CardProps {
  title: string;
  image: string;
  author: string;
}

const Card: FC<CardProps> = ({ title, image, author }) => {
  return (
    <article className={CardStyles.container}>
      <h3>{title}</h3>
      <img src={image} alt={title} />
      <p>{author}</p>
    </article>
  );
};

export default Card;
