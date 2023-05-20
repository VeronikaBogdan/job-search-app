import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { Box, LoadingOverlay, Stack, TypographyStylesProvider } from '@mantine/core';

import { Layout } from '@/components/layout/layout';
import { Card } from '@/components/cards/card/card';

import { getVacancy } from '@/store/reducers/vacancy';

import { useStyles } from '@/styles/vacancy-styles';

const Vacancy = () => {
  const dispatch = useDispatch();
  const { classes } = useStyles();
  const { vacancy, loading } = useSelector((state) => state.vacancy);
  const { asPath } = useRouter();

  const vacancyId = asPath.slice(9);

  useEffect(() => {
    dispatch(getVacancy(vacancyId));
  }, [dispatch]);

  return (
    <Layout>
      {loading ? (
        <LoadingOverlay visible overlayBlur={3} overlayOpacity={0.3} />
      ) : (
        <Stack className={classes.content}>
          <Card
            profession={vacancy.profession}
            firmName={vacancy.firm_name}
            location={vacancy.town.title}
            typeOfWork={vacancy.type_of_work.title}
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
