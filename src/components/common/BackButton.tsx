import BackButtonStyles from './BackButton.module.scss';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate(-1)} className={BackButtonStyles.btn}>
      Back
    </button>
  );
};

export default BackButton;
