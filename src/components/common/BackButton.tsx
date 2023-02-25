import { useNavigate } from 'react-router-dom';

import { ButtonContent } from '../../content';
import BackButtonStyles from './BackButton.module.scss';

const BackButton = () => {
  const navigate = useNavigate();
  const { backButton } = ButtonContent;

  return (
    <button onClick={() => navigate(-1)} className={BackButtonStyles.btn}>
      {backButton}
    </button>
  );
};

export default BackButton;
