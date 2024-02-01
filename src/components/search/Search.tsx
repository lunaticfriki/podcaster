import { ChangeEvent, FC, useEffect, useState } from 'react';

import { SearchContent } from '../../content';
import { CallbackFunction } from '../../types';
import SearchStyles from './Search.module.scss';

interface SearchProps {
  fn: CallbackFunction;
}

const Search: FC<SearchProps> = ({ fn }) => {
  const [state, setState] = useState('');
  const { placeholder } = SearchContent;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
  };

  useEffect(() => {
    fn(state);
  }, [state]);

  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        className={SearchStyles.input}
        value={state}
        onChange={handleChange}
        data-testid="input"
      />
    </div>
  );
};

export default Search;
