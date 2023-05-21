import Link from 'next/link';
import { useRouter } from 'next/router';
import { Button, Stack, Title } from '@mantine/core';

import Images from 'public/assets/svg/index';

import { useStyles } from './styled-empty-state';

export const EmptyState = () => {
  const { pathname } = useRouter();
  const { classes } = useStyles();

  return (
    <Stack spacing={32} className={classes.wrapper}>
      <Images.NoVacancies />
      <Title order={3} className={classes.message}>
        Упс, здесь еще ничего нет!
      </Title>
      {pathname === '/favorites' && (
        <Button component={Link} href='/' variant='light' className={classes.button}>
          Поиск Вакансий
        </Button>
      )}
    </Stack>
  );
};
