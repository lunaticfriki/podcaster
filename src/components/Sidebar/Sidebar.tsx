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
    <div className={SidebarStyles.container}>
      <img src={cover} alt={title} />
      <p>{title}</p>
      <p>by {author} </p>
      <p>{description}</p>
    </div>
  );
};

export default Sidebar;
