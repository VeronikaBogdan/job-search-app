import React from 'react';
import { ActionIcon } from '@mantine/core';

import Images from 'public/assets/svg/index';

import { useStyles } from './styled-favorite';

export const Favorite = ({ isFavorite, onClick }) => {
  const { classes } = useStyles();

  return (
    <ActionIcon className={isFavorite ? classes.starActive : classes.star} variant='transparent' onClick={onClick}>
      <Images.Star />
    </ActionIcon>
  );
};
