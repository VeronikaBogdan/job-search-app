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

  return (
    <Stack className={isVacancyPage ? classes.vacancyCard : classes.card} spacing={11}>
      <Group position='apart'>
        <Title order={3} className={isVacancyPage ? classes.vacancyProfessionTitle : classes.professionTitle}>
          {profession} {firmName}
        </Title>
        <Favorite isFavorite={isFavorite} onClick={() => console.log('star!!!')} />
      </Group>
      <Group>
        <Text className={isVacancyPage ? classes.vacancyPaymentText : classes.paymentText}>
          з/п от {paymentFrom} {currency}
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
