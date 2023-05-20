import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { Pagination, Stack, createStyles } from '@mantine/core';
import { usePagination } from '@mantine/hooks';

import { getVacancies } from '@/store/reducers/vacancies';

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

export const Cards = ({ isSearch, filteredData }) => {
  const dispatch = useDispatch();
  const { classes } = useStyles();

  const { vacancies } = useSelector((state) => state.vacancies);

  const [searchedData, setSearchedData] = useState({});
  const pagination = usePagination({ total: 5, initialPage: 1 });

  const handleChangeSearchFromInput = (keyword) => {
    setSearchedData(keyword);
  };

  useEffect(() => {
    dispatch(getVacancies({ ...filteredData, ...searchedData }));
  }, []);

  return (
    <Stack className={isSearch ? classes.content : classes.wrapper} spacing={14}>
      {isSearch && <Search onChangeSearch={handleChangeSearchFromInput} />}
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
      <Pagination total={20} siblings={1} />
    </Stack>
  );
};
