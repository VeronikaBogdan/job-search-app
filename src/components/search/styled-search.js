import styled from 'styled-components';

import { BLACK, GREY200, GREY500, MAINBLUE, WHITE } from '@/styles/constant';

export const SearchWrapper = styled.form`
  display: flex;
  align-items: center;
  padding: 0px 10px;
  background: ${WHITE};
  border: 1px solid ${GREY200};
  border-radius: 8px;

  &:hover {
    cursor: pointer;
    border: 1px solid ${MAINBLUE};
  }

  &:focus-within {
    border: 1px solid ${MAINBLUE};
  }

  svg {
    width: 16px;
    height: 16px;
    margin-right: 8px;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  border: 0;
  padding: 13px 3px 12px;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 0.4px;
  color: ${BLACK};

  &::placeholder {
    color: ${GREY500};
  }

  &::-webkit-search-cancel-button {
    -webkit-appearance: none;
  }

  &:focus {
    caret-color: ${MAINBLUE};
    outline: none;
  }
`;
