import React from 'react';

import SearchIcon from '../../assets/svg/search.svg';

import { SearchInput, SearchWrapper } from './styled-search';
import { SearchButton } from '../buttons/buttons';

export const Search = () => (
  <SearchWrapper>
    <SearchIcon />
    <SearchInput placeholder='Введите название вакансии' type='search' />
    <SearchButton type='button'>Поиск</SearchButton>
  </SearchWrapper>
);
