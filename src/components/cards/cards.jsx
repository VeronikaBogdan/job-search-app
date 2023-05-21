import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Pagination, Stack } from '@mantine/core';

import { getVacancies } from '@/store/reducers/vacancies';

import { Card } from '@/components/cards/card/card';
import { Search } from '@/components/search/search';

import { useStyles } from './styled-cards';

export const Cards = ({ isSearch, filteredData, vacanciesData }) => {
  const dispatch = useDispatch();
  const { pathname } = useRouter();
  const { classes } = useStyles();

  const { vacancies, loading } = useSelector((state) => state.vacancies);
  const [searchedData, setSearchedData] = useState({});
  const [activePage, setPage] = useState(1);

  const total = vacancies.total / 4;

  // const isSearchVacancyPage = pathname === '/';

  const handleChangeSearchFromInput = (keyword) => {
    setSearchedData(keyword);
  };

  useEffect(() => {
    dispatch(getVacancies({ ...filteredData, ...searchedData, page: activePage - 1 }));
  }, [activePage, filteredData, searchedData]);

  return (
    <Stack className={isSearch ? classes.content : classes.wrapper} spacing={14}>
      {isSearch && <Search onChangeSearch={handleChangeSearchFromInput} />}
      {!loading &&
        vacancies.objects?.map((vacancy) => (
          <Link href={`/vacancy/${vacancy.id}`} key={vacancy.id}>
            <Card
              vacancyId={vacancy.id}
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
      <Pagination
        classNames={{ control: classes.control }}
        sx={classes.root}
        value={activePage}
        onChange={setPage}
        total={total > 126 ? 126 : total}
        siblings={1}
      />
    </Stack>
  );
};
