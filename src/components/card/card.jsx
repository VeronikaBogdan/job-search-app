import React from 'react';
import { Flex, Grid, Group, Stack, Text, Title } from '@mantine/core';

import Location from '../../assets/svg/location.svg';
import Point from '../../assets/svg/point.svg';

import { useStyles } from './styled-card';
import { Favorite } from '../favorite/favorite';

export const Card = ({ profession, firmName, location, typeOfWork, paymentFrom, paymentTo, currency }) => {
  const { classes } = useStyles();

  const isFavorite = false;

  return (
    <Grid.Col>
      <Stack className={classes.card} spacing={11}>
        <Group position='apart'>
          <Title order={3} className={classes.professionTitle}>
            {profession} {firmName}
          </Title>
          <Favorite isFavorite={isFavorite} onClick={() => console.log('star!!!')} />
        </Group>
        <Group>
          <Text className={classes.paymentText}>
            з/п от {paymentFrom} {currency}
          </Text>
          <Point />
          <Text className={classes.workText}>{typeOfWork}</Text>
        </Group>
        <Flex>
          <Location />
          <Text className={classes.locationText}>{location}</Text>
        </Flex>
      </Stack>
    </Grid.Col>
  );
};
