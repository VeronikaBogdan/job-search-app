import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, LoadingOverlay, createStyles } from '@mantine/core';

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
