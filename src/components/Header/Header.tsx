import { HeaderContent, PathsContent } from '../../content';

import { FC } from 'react';
import HeaderStyles from './Headser.module.scss';
import { Link } from 'react-router-dom';

const Header: FC = () => {
  const { title } = HeaderContent;
  const { home } = PathsContent;
  return (
    <header className={HeaderStyles.container}>
      <Link to={home}>
        <h1 data-testid="title">{title}</h1>
      </Link>
    </header>
  );
};

export default Header;
