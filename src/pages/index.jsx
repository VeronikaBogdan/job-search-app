import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, LoadingOverlay, createStyles } from '@mantine/core';

import { getAuth } from '@/store/reducers/auth';
import { getCatalogues } from '@/store/reducers/catalogues';
import { getVacancies } from '@/store/reducers/vacancies';

import { CardsList } from '@/components/cards/cards-list';
import { Filters } from '@/components/filters/filters';
import { Layout } from '@/components/layout/layout';

const useStyles = createStyles(() => ({
  wrapper: {
    width: '100%',
  },
  content: {
    padding: '2px 0 0 13px',
  },
}));

const MainPage = () => {
  const dispatch = useDispatch();
  const { classes } = useStyles();
  const [filteredData, setFilteredData] = useState({});

  const { loading: isLoadingAuth } = useSelector((state) => state.auth);
  const { loading: isLoadingCatalogues, error: isErrorCatalogues } = useSelector((state) => state.catalogues);
  const { loading: isLoadingVacancies, error: isErrorVacancies } = useSelector((state) => state.vacancies);

  const isLoading = isLoadingCatalogues || isLoadingVacancies;

  // sessionStorage.clear();
  console.log('index:', typeof window !== 'undefined' ? Object.entries(sessionStorage) : null);
  console.log('isLoadingAuth:', isLoadingAuth);

  useEffect(() => {
    // isLoadingAuth && dispatch(getAuth());
    dispatch(getCatalogues());
    // !isLoadingAuth && dispatch(getCatalogues()) && dispatch(getVacancies());
  }, [isLoadingAuth]);

  const handleChangeFilteredData = (filteredData) => {
    setFilteredData(filteredData);
  };

  return (
    <>
      {isLoading && <LoadingOverlay visible overlayBlur={3} overlayOpacity={0.3} />}
      <Layout>
        <Grid columns={24} className={classes.wrapper}>
          <Grid.Col span={7}>
            <Filters onChangeFilteredData={handleChangeFilteredData} />
          </Grid.Col>
          <Grid.Col span={17}>
            <CardsList isSearch filteredData={filteredData} />
          </Grid.Col>
        </Grid>
      </Layout>
    </>
  );
};

export default MainPage;
