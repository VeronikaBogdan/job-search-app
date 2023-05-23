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
    <SearchWrapper data-elem='search-input'>
      <Images.Search />
      <SearchInput
        placeholder='Введите название вакансии'
        type='search'
        value={searchTitle}
        onChange={handleSearchTitle}
      />
      <SearchButton data-elem='search-button' type='button' onClick={handleSubmit}>
        Поиск
      </SearchButton>
    </SearchWrapper>
  );
};
