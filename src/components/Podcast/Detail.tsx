import BackButton from '../common/BackButton';
import DetailStyles from './Detail.module.scss';
import { Episode } from '../../types';
import { FC } from 'react';
import parse from 'html-react-parser';

interface DetailProps {
  episodeDetail: Episode;
}

const Detail: FC<DetailProps> = ({ episodeDetail }) => {
  const { trackName, description, episodeUrl } = episodeDetail;
  return (
    <div className={DetailStyles.container} data-testid="detail">
      <h3>{trackName}</h3>
      <p data-testid="description">{parse(description)}</p>
      <audio controls className={DetailStyles.audio} data-testid="audio">
        <source src={episodeUrl} type="audio/mp3" />
      </audio>
      <BackButton />
    </div>
  );
};

export default Detail;
