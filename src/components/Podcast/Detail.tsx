import DetailStyles from './Detail.module.scss';
import { FC } from 'react';

interface DetailProps {
  episodeDetail: Object;
}

const Detail: FC<DetailProps> = ({ episodeDetail }) => {
  return <div className={DetailStyles.container}>Detail</div>;
};

export default Detail;
