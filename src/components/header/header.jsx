import React from 'react';
import { useRouter } from 'next/router';

import logo from '@/assets/svg/logo.svg';

import { HeaderContainer, Links, Logo, StyledHeader, StyledLink } from './styled-header';

export const Header = () => {
  const { pathname } = useRouter();

  return (
    <StyledHeader>
      <HeaderContainer>
        <Logo src={logo} />
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
