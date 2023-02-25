import { FC } from 'react';

import { FooterContent } from '../../content/';
import FooterStyles from './Footer.module.scss';

const Footer: FC = () => {
  const { github_url, signature, year } = FooterContent;

  return (
    <footer className={FooterStyles.container}>
      <a href={github_url} className={FooterStyles.signature} target="_blank" data-testid="signature" rel="noreferrer">
        {signature}
        <span className={FooterStyles.year} data-testid="year">
          {year}
        </span>
      </a>
    </footer>
  );
};

export default Footer;
