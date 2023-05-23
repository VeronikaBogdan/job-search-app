import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, LoadingOverlay } from '@mantine/core';

import { getCatalogues } from '@/store/reducers/catalogues';
import { getVacancies } from '@/store/reducers/vacancies';

import { CardsList } from '@/components/cards/cards-list';
import { Filters } from '@/components/filters/filters';
import { Layout } from '@/components/layout/layout';

import { useStyles } from './styles/styled-index';

const MainPage = ({ token }) => {
  const dispatch = useDispatch();
  const { classes } = useStyles();
  const [filteredData, setFilteredData] = useState({});

  const { loading: isLoadingCatalogues } = useSelector((state) => state.catalogues);
  const { loading: isLoadingVacancies } = useSelector((state) => state.vacancies);

  const isLoading = isLoadingCatalogues || isLoadingVacancies;

  useEffect(() => {
    dispatch(getCatalogues({ token })) && dispatch(getVacancies({ token }));
  }, [token]);

  const handleChangeFilteredData = (filteredData) => {
    setFilteredData(filteredData);
  };

  return (
    <>
      {isLoading && <LoadingOverlay visible overlayBlur={3} overlayOpacity={0.3} />}
      <Layout>
        <Grid columns={24} className={classes.wrapper}>
          <Grid.Col span={7} className={classes.desktopScreen}>
            <Filters onChangeFilteredData={handleChangeFilteredData} />
          </Grid.Col>
          <Grid.Col span={17} className={classes.desktopScreen}>
            <CardsList isSearch filteredData={filteredData} />
          </Grid.Col>
          <Grid.Col span={24} className={classes.mobileScreen}>
            <Filters onChangeFilteredData={handleChangeFilteredData} />
            <CardsList isSearch filteredData={filteredData} />
          </Grid.Col>
        </Grid>
      </Layout>
    </>
  );
};

export default MainPage;
