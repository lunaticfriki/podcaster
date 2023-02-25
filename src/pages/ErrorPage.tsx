import { ErrorPageContent } from '../content';
import ErrorPageStyles from './styles/ErrorPage.module.scss';
import { FC } from 'react';

const ErrorPage: FC = () => {
  const { title, status_code } = ErrorPageContent;

  return (
    <div className={ErrorPageStyles.container}>
      <h2>{title}</h2>
      <p>{status_code}</p>
    </div>
  );
};

export default ErrorPage;
