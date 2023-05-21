import React, { useState } from 'react';

import Images from 'public/assets/svg/index';

import { SearchInput, SearchWrapper } from './styled-search';
import { SearchButton } from '../buttons/buttons';

export const Search = ({ onChangeSearch }) => {
  const [searchTitle, setSearchTitle] = useState('');

  const handleSearchTitle = (event) => {
    setSearchTitle(event.target.value);
  };

  const handleSubmit = () => {
    onChangeSearch({ keyword: searchTitle });
  };

  return (
    <SearchWrapper>
      <Images.Search />
      <SearchInput
        placeholder='Введите название вакансии'
        type='search'
        value={searchTitle}
        onChange={handleSearchTitle}
      />
      <SearchButton type='button' onClick={handleSubmit}>
        Поиск
      </SearchButton>
    </SearchWrapper>
  );
};
