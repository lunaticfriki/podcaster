import { FC, ReactNode } from 'react';

import { SidebarContent } from '../../content/';
import SidebarStyles from './Sidebar.module.scss';

interface SidebarProps {
  title: string;
  author: string;
  cover: string;
  description: string | JSX.Element | JSX.Element[];
  children: ReactNode;
}

const Sidebar: FC<SidebarProps> = ({ title, author, cover, description, children }) => {
  const { by } = SidebarContent;

  return (
    <div className={SidebarStyles.layout}>
      <aside className={SidebarStyles.container}>
        <div className={SidebarStyles.cover}>
          <img src={cover} alt={title} />
          <p>
            {title}{' '}
            <span>
              {by} {author}
            </span>
          </p>
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
