import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { Box, LoadingOverlay, Stack, TypographyStylesProvider } from '@mantine/core';

import { getTokenFromStorage } from '@/utils/token-getter';

import { Layout } from '@/components/layout/layout';
import { Card } from '@/components/cards/card/card';

import { getVacancy } from '@/store/reducers/vacancy';

import { useStyles } from '@/pages/styles/styled-vacancy';

const Vacancy = () => {
  const dispatch = useDispatch();
  const { asPath } = useRouter();
  const { classes } = useStyles();
  const { vacancy, loading } = useSelector((state) => state.vacancy);

  const vacancyId = asPath.slice(9);

  const token = getTokenFromStorage('access_token');

  useEffect(() => {
    dispatch(getVacancy({ vacancyId, token }));
  }, [dispatch]);

  return (
    <Layout>
      {loading ? (
        <LoadingOverlay visible overlayBlur={3} overlayOpacity={0.3} />
      ) : (
        <Stack className={classes.content}>
          <Card
            vacancyId={vacancyId}
            profession={vacancy.profession}
            location={vacancy.town?.title}
            typeOfWork={vacancy.type_of_work?.title}
            paymentFrom={vacancy.payment_from}
            paymentTo={vacancy.payment_to}
            currency={vacancy.currency}
          />
          <Box className={classes.vacancyRichText}>
            <TypographyStylesProvider>
              <div dangerouslySetInnerHTML={{ __html: vacancy.vacancyRichText }} />
            </TypographyStylesProvider>
          </Box>
        </Stack>
      )}
    </Layout>
  );
};

export default Vacancy;
