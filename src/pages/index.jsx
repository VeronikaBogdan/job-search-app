import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, createStyles } from '@mantine/core';

import { getAuth } from '@/store/reducers/auth';
import { getCatalogues } from '@/store/reducers/catalogues';
import { getVacancies } from '@/store/reducers/vacancies';

import { Cards } from '@/components/cards/cards';
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

  const { loading } = useSelector((state) => state.auth);

  // localStorage.clear();
  // console.log(localStorage.getItem('access_token'));
  useEffect(() => {
    // dispatch(getAuth());
    // !loading &&
    dispatch(getCatalogues());
    dispatch(getVacancies());
  }, [dispatch]);

  return (
    <Layout>
      <Grid columns={24} className={classes.wrapper}>
        <Grid.Col span={7}>
          <Filters />
        </Grid.Col>
        <Grid.Col span={17}>
          <Cards isSearch />
        </Grid.Col>
      </Grid>
    </Layout>
  );
};

export default MainPage;
