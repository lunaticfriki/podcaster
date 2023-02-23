import { FC } from 'react';
import { SpinnerIcon } from './Icons';
import SpinnerStyles from './Spinner.module.scss';

const Spinner: FC = () => {
  return (
    <div className={SpinnerStyles.spinner}>
      <SpinnerIcon />
    </div>
  );
};

export default Spinner;
