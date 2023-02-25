import { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { PathsContent, SidebarContent } from '../../content/';
import SidebarStyles from './Sidebar.module.scss';

interface SidebarProps {
  title: string;
  author: string;
  cover: string;
  description: string | JSX.Element | JSX.Element[];
  children: ReactNode;
  id?: string;
}

const Sidebar: FC<SidebarProps> = ({ title, author, cover, description, children, id }) => {
  const { by } = SidebarContent;
  const { podcast } = PathsContent;

  return (
    <div className={SidebarStyles.layout} data-testid="sidebar">
      <aside className={SidebarStyles.container}>
        <div className={SidebarStyles.cover}>
          <Link to={`${podcast}${id}`}>
            <img src={cover} alt={title} />
          </Link>
          <Link to={`${podcast}${id}`}>
            <p data-testid="title">
              {title}
              <span>
                {by} {author}
              </span>
            </p>
          </Link>
        </div>
        <div className={SidebarStyles.description}>
          <p data-testid="description">{description}</p>
        </div>
      </aside>
      {children}
    </div>
  );
};

export default Sidebar;
