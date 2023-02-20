import { FC, ReactNode } from 'react';

import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import LayoutStyles from './Layout.module.scss';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className={LayoutStyles.container}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
