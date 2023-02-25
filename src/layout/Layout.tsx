import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import LayoutStyles from './Layout.module.scss';

const Layout: FC = () => {
  return (
    <div className={LayoutStyles.container}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
