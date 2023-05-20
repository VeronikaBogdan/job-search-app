import React from 'react';
import { useRouter } from 'next/router';

import { Flex, Group, Stack, Text, Title } from '@mantine/core';

import Location from '../../../assets/svg/location.svg';
import Point from '../../../assets/svg/point.svg';
import { Favorite } from '../../favorite/favorite';

import { useStyles } from './styled-card';

export const Card = ({ profession, firmName, location, typeOfWork, paymentFrom, paymentTo, currency }) => {
  const { classes } = useStyles();
  const { pathname } = useRouter();

  const isFavorite = false;

  const isVacancyPage = pathname === '/vacancy/[id]';

  console.log(Object.entries(localStorage));
  return (
    <Stack className={isVacancyPage ? classes.vacancyCard : classes.card} spacing={11}>
      <Flex justify='space-between'>
        <Title order={3} className={isVacancyPage ? classes.vacancyProfessionTitle : classes.professionTitle}>
          {profession}
        </Title>
        <Favorite isFavorite={isFavorite} onClick={() => console.log('star!!!')} />
      </Flex>
      <Group>
        <Text className={isVacancyPage ? classes.vacancyPaymentText : classes.paymentText}>
          з/п{' '}
          {paymentFrom === paymentTo
            ? paymentFrom
            : paymentTo === 0
            ? `от ${paymentFrom}`
            : paymentFrom === 0
            ? `до ${paymentTo}`
            : `${paymentFrom} - ${paymentTo}`}{' '}
          {currency}
        </Text>
        <Point />
        <Text className={isVacancyPage ? classes.vacancyWorkText : classes.workText}>{typeOfWork}</Text>
      </Group>
      <Flex className={isVacancyPage && classes.vacancyLocationWrapper}>
        <Location />
        <Text className={isVacancyPage ? classes.vacancyLocationText : classes.locationText}>{location}</Text>
      </Flex>
    </Stack>
  );
};
