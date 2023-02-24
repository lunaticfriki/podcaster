import BackButton from '../common/BackButton';
import DetailStyles from './Detail.module.scss';
import { EpisodeAttributes } from '../../../server/src/feed/detail-types';
import { FC } from 'react';
import parse from 'html-react-parser';
interface DetailProps {
  episodeDetail: EpisodeAttributes;
}

const Detail: FC<DetailProps> = ({ episodeDetail }) => {
  const {
    name,
    description: { standard },
    url,
  } = episodeDetail;
  return (
    <div className={DetailStyles.container} data-testid="detail">
      <h3>{name}</h3>
      <p data-testid="description">{parse(standard)}</p>
      <audio controls className={DetailStyles.audio} data-testid="audio">
        <source src={url} type="audio/mp3" />
      </audio>
      <BackButton />
    </div>
  );
};

export default Detail;
