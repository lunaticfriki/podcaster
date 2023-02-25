import { FC } from 'react';
import { Link } from 'react-router-dom';

import { HeaderContent, PathsContent } from '../../content';
import HeaderStyles from './Headser.module.scss';

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
