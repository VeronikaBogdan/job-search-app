import React from 'react';
import Link from 'next/link';
import { Stack, createStyles } from '@mantine/core';

import { Card } from '@/components/cards/card/card';
import { Search } from '@/components/search/search';

const useStyles = createStyles((theme) => ({
  wrapper: {
    width: '100%',
    maxWidth: '786px',
    margin: '0 auto',
    paddingRight: '14px',
  },
  content: {
    padding: '2px 0 0 13px',
  },
}));

export const Cards = ({ isSearch }) => {
  const { classes } = useStyles();

  return (
    <Stack className={isSearch ? classes.content : classes.wrapper} spacing={14}>
      {isSearch && <Search />}
      <Link href='/vacancy/1'>
        <Card
          profession='Менеджер-дизайнер'
          firmName=''
          location='Новый Уренгой'
          typeOfWork='Полный рабочий день'
          paymentFrom='70000'
          paymentTo=''
          currency='rub'
        />
      </Link>
      <Card
        profession='Ведущий графический дизайнер'
        firmName='НЕ УДАЛЕННО'
        location='Москва'
        typeOfWork='Полный рабочий день'
        paymentFrom='80000'
        paymentTo=''
        currency='rub'
      />
      <Card
        profession='Работник декорации, дизайнер'
        firmName='(ТЦ Амбар)'
        location='Самара'
        typeOfWork='Сменный график работы'
        paymentFrom='29000'
        paymentTo=''
        currency='rub'
      />
      <Card
        profession='Менеджер-дизайнер'
        firmName=''
        location='Тюмень'
        typeOfWork='Полный рабочий день'
        paymentFrom='55000'
        paymentTo='95000'
        currency='rub'
      />
    </Stack>
  );
};
