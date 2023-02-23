import BackButtonStyles from './BackButton.module.scss';
import { ButtonContent } from '../../content';
import { useNavigate } from 'react-router-dom';

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
