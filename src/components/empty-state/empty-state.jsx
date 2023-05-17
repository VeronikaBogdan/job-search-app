import { Button, Stack, Title } from '@mantine/core';

import NoFavorites from '../../assets/svg/no-favorites.svg';

import { useStyles } from './styled-empty-state';

export const EmptyState = () => {
  const { classes } = useStyles();

  return (
    <Stack spacing={32} className={classes.wrapper}>
      <NoFavorites />
      <Title order={3} className={classes.message}>
        Упс, здесь еще ничего нет!
      </Title>
      <Button component='a' href='/' variant='light' className={classes.button}>
        Поиск Вакансий
      </Button>
    </Stack>
  );
};
