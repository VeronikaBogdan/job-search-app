import React from 'react';
import { Grid, Stack, createStyles } from '@mantine/core';

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
  const { classes } = useStyles();

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
