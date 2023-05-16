import React from 'react';
import { useRouter } from 'next/router';

import Logo from '../../assets/svg/logo.svg';

import { HeaderContainer, Links, StyledHeader, StyledLink } from './styled-header';

export const Header = () => {
  const { pathname } = useRouter();

  return (
    <StyledHeader>
      <HeaderContainer>
        <Logo />
        <Links>
          <StyledLink href='/' pathname={pathname}>
            Поиск Вакансий
          </StyledLink>
          <StyledLink href='/favorites' pathname={pathname}>
            Избранное
          </StyledLink>
        </Links>
      </HeaderContainer>
    </StyledHeader>
  );
};
