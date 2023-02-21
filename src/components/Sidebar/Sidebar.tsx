import { FC } from 'react';
import SidebarStyles from './Sidebar.module.scss';

interface SidebarProps {
  title: string;
  author: string;
  cover: string;
  description: string;
}

const Sidebar: FC<SidebarProps> = ({ title, author, cover, description }) => {
  return (
    <aside className={SidebarStyles.container}>
      <div className="cover">
        <img src={cover} alt={title} />
        <p>
          {title} <span>by {author}</span>
        </p>
      </div>

      <p>{description}</p>
    </aside>
  );
};

export default Sidebar;
