import React from 'react';
import { ActionIcon } from '@mantine/core';

import Star from '../../assets/svg/star.svg';

import { useStyles } from './styled-favorite';

export const Favorite = ({ isFavorite, onClick }) => {
  const { classes } = useStyles();

  return (
    <ActionIcon className={isFavorite ? classes.starActive : classes.star} variant='transparent' onClick={onClick}>
      <Star />
    </ActionIcon>
  );
};
