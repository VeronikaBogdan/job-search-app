import React from 'react';
import { Grid, createStyles } from '@mantine/core';

import { Layout } from '@/components/layout/layout';
import { Search } from '@/components/search/search';
import { Filters } from '@/components/filters/filters';
import { Card } from '@/components/card/card';

const useStyles = createStyles((theme) => ({
  wrapper: {
    width: '100%',
  },
  search: {
    paddingRight: '5px',
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
          <Grid className={classes.content} gutter={14}>
            <Grid.Col className={classes.search}>
              <Search />
            </Grid.Col>
            <Card
              profession='Менеджер-дизайнер'
              firmName=''
              location='Новый Уренгой'
              typeOfWork='Полный рабочий день'
              paymentFrom='70000'
              paymentTo=''
              currency='rub'
            />
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
          </Grid>
        </Grid.Col>
      </Grid>
    </Layout>
  );
};

export default MainPage;
