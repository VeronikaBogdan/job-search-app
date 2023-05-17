import styled from 'styled-components';

import { BLUE400, BLUE600, MAINBLUE, WHITE } from '@/styles/constant';

export const Button = styled.button`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: ${MAINBLUE};
  border: 0;
  border-radius: 8px;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: ${WHITE};

  &:hover {
    background: ${BLUE400};
  }

  &:active {
    background: ${BLUE600};
  }
`;

export const SearchButton = styled(Button)`
  margin-right: -1px;
  letter-spacing: 0.8px;
  width: 97px;
  height: 32px;
`;
