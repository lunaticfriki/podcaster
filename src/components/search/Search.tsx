import { FC } from 'react';
import { SearchContent } from '../../content';
import SearchStyles from './Search.module.scss';

const Search: FC = () => {
  const { placeholder } = SearchContent;

  return (
    <div>
      <input type="text" placeholder={placeholder} className={SearchStyles.input} />
    </div>
  );
};

export default Search;
