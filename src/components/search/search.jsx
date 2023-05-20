import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { getVacancies } from '@/store/reducers/vacancies';

import SearchIcon from '../../assets/svg/search.svg';

import { SearchInput, SearchWrapper } from './styled-search';
import { SearchButton } from '../buttons/buttons';

export const Search = () => {
  const dispatch = useDispatch();
  const [searchTitle, setSearchTitle] = useState('');

  const handleSearchTitle = (event) => {
    setSearchTitle(event.target.value);
  };

  const handleSubmit = () => {
    dispatch(getVacancies({ keyword: searchTitle }));
  };

  return (
    <SearchWrapper>
      <SearchIcon />
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
