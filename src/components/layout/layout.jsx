import React from 'react';
import { Header } from '@/components/header/header';

import { Container } from './styled-layout';

export const Layout = ({ children }) => (
  <>
    <Header />
    <Container>{children}</Container>
  </>
);
