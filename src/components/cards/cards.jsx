import React from 'react';
import { useSelector } from 'react-redux';
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
  const { vacancies, loading } = useSelector((state) => state.vacancies);

  console.log('loading: ', loading);
  return (
    <Stack className={isSearch ? classes.content : classes.wrapper} spacing={14}>
      {isSearch && <Search />}
      {vacancies.map((vacancy) => (
        <Link href={`/vacancy/${vacancy.id}`} key={vacancy.id}>
          <Card
            profession={vacancy.profession}
            firmName={vacancy.firm_name}
            location={vacancy.town.title}
            typeOfWork={vacancy.type_of_work.title}
            paymentFrom={vacancy.payment_from}
            paymentTo={vacancy.payment_to}
            currency={vacancy.currency}
          />
        </Link>
      ))}
    </Stack>
  );
};
