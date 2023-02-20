import { FC } from 'react';

interface CardProps {
  title: string;
  image: string;
  author: string;
}

const Card: FC<CardProps> = ({ title, image, author }) => {
  return (
    <article>
      <h3>{title}</h3>
      <p>{author}</p>
      <img src={image} alt={title} />
    </article>
  );
};

export default Card;
