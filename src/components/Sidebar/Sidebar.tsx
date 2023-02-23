import { FC, ReactNode } from 'react';

import { Link } from 'react-router-dom';
import { SidebarContent } from '../../content/';
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

  return (
    <div className={SidebarStyles.layout}>
      <aside className={SidebarStyles.container}>
        <div className={SidebarStyles.cover}>
          <Link to={`/podcast/${id}`}>
            <img src={cover} alt={title} />
          </Link>
          <Link to={`/podcast/${id}`}>
            <p>
              {title}
              <span>
                {by} {author}
              </span>
            </p>
          </Link>
        </div>
        <div className={SidebarStyles.description}>
          <p>{description}</p>
        </div>
      </aside>
      {children}
    </div>
  );
};

export default Sidebar;
