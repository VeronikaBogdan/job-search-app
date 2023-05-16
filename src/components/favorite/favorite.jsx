import React from 'react';
import { ActionIcon } from '@mantine/core';

import Star from '../../assets/svg/star.svg';
import StarBlue from '../../assets/svg/star-blue.svg';

export const Favorite = ({ isFavorite, onClick }) => (
  <ActionIcon variant='transparent' onClick={onClick}>
    {isFavorite ? <StarBlue /> : <Star />}
  </ActionIcon>
);
