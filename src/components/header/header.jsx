import React from 'react';
import { useRouter } from 'next/router';

import Images from 'public/assets/svg/index';

import { HeaderContainer, Links, LogoLink, StyledHeader, StyledLink } from './styled-header';

export const Header = () => {
  const { pathname } = useRouter();

  return (
    <StyledHeader>
      <HeaderContainer>
        <LogoLink href='/'>
          <Images.Logo />
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
