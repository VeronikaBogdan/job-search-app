import React from 'react';
import { useRouter } from 'next/router';
import { Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import Images from 'public/assets/svg/index';

import { HeaderContainer, Links, LogoLink, StyledHeader, StyledLink } from './styled-header';

export const Header = () => {
  const { pathname } = useRouter();
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <StyledHeader>
      <HeaderContainer isOpen={opened}>
        <Burger opened={opened} onClick={toggle} />
        <LogoLink href='/'>
          <Images.Logo />
        </LogoLink>
        <Links isOpen={opened}>
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
