import React, { useState } from 'react';
import { useRouter } from 'next/router';

import { Flex, Group, Stack, Text, Title } from '@mantine/core';

import Images from 'public/assets/svg/index';

import { Favorite } from '@/components/favorite/favorite';

import { useStyles } from './styled-card';
import { getSalaryRange } from './card.helper';

export const Card = ({ vacancyId, profession, firmName, location, typeOfWork, paymentFrom, paymentTo, currency }) => {
  const { pathname } = useRouter();
  const { classes } = useStyles();

  const initialFavoriteState = Object.keys(localStorage).some((vacancy) => vacancy.slice(8) === vacancyId.toString());
  const [isFavorite, setIsFavorite] = useState(initialFavoriteState);

  const isVacancyPage = pathname === '/vacancy/[id]';

  const salaryRange = getSalaryRange(paymentFrom, paymentTo);

  const toggleButton = (event) => {
    event.preventDefault();
    setIsFavorite(!isFavorite);
  };

  const addToFavorites = (event) => {
    toggleButton(event);
    localStorage.setItem(`favorite${vacancyId}`, vacancyId);
  };

  const removeFromFavorites = (event) => {
    toggleButton(event);
    localStorage.removeItem(`favorite${vacancyId}`, vacancyId);
  };

  return (
    <Stack className={isVacancyPage ? classes.vacancyCard : classes.card} spacing={11}>
      <Flex justify='space-between'>
        <Title order={3} className={isVacancyPage ? classes.vacancyProfessionTitle : classes.professionTitle}>
          {profession}
        </Title>
        <Favorite isFavorite={isFavorite} onClick={isFavorite ? removeFromFavorites : addToFavorites} />
      </Flex>
      <Group>
        <Text className={isVacancyPage ? classes.vacancyPaymentText : classes.paymentText}>
          з/п {salaryRange} {currency}
        </Text>
        <Images.Point />
        <Text className={isVacancyPage ? classes.vacancyWorkText : classes.workText}>{typeOfWork}</Text>
      </Group>
      <Flex className={isVacancyPage && classes.vacancyLocationWrapper}>
        <Images.Location />
        <Text className={isVacancyPage ? classes.vacancyLocationText : classes.locationText}>{location}</Text>
      </Flex>
    </Stack>
  );
};
