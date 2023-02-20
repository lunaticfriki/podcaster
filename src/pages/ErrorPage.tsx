import { ErrorPageContent } from '../content';
import { FC } from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage: FC = () => {
  let error = useRouteError();
  console.log(error);

  const { title, status_code } = ErrorPageContent;
  return (
    <div>
      <h2>{title}</h2>
      <p>{status_code}</p>
    </div>
  );
};

export default ErrorPage;
