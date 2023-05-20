import React from 'react';
import { useRouter } from 'next/router';

import Logo from '../../assets/svg/logo.svg';

import { HeaderContainer, Links, LogoLink, StyledHeader, StyledLink } from './styled-header';
import Link from 'next/link';

export const Header = () => {
  const { pathname } = useRouter();

  return (
    <StyledHeader>
      <HeaderContainer>
        <LogoLink href='/'>
          <Logo />
        </LogoLink>
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
