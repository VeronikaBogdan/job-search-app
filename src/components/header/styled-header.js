import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import { BLACK, MAINBLUE, WHITE } from '@/styles/constant';
import { Container } from '@/components/layout/styled-layout';

export const StyledHeader = styled.header`
  background-color: ${WHITE};
`;

export const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-top: 0;

  svg {
    width: 141px;
    height: 36px;
    position: absolute;
    left: 0;
  }
`;

export const Links = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 275px;
  width: 100%;
  padding: 32px 0px;
  margin-right: 13px;
`;

export const StyledLink = styled(Link)`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: ${({ href, pathname }) =>
    pathname === href || (pathname === '/vacancy/[id]' && href === '/') ? MAINBLUE : BLACK};
`;
