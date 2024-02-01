import { FC } from 'react';
import LoaderStyles from './Loader.module.scss';
import Spinner from './Spinner';

const Loader: FC = () => {
  return (
    <div className={LoaderStyles.container}>
      <Spinner />
    </div>
  );
};

export default Loader;
