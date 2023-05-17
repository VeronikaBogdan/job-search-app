import React from 'react';
import { useForm } from '@mantine/form';
import { Box, Button, Group, NumberInput, Select, Title } from '@mantine/core';

import DownIcon from '../../assets/svg/down.svg';
import CrossIcon from '../../assets/svg/cross.svg';

import { useStyles } from './styled-filters';

export const Filters = () => {
  const { classes } = useStyles();

  const classNames = {
    input: classes.input,
    rightSection: classes.rightSection,
    control: classes.control,
    label: classes.label,
  };

  const form = useForm({
    initialValues: {
      industry: '',
      paymentFrom: '',
      paymentTo: '',
    },
  });

  const handleSubmit = (values) => console.log(values);

  return (
    <Box className={classes.form}>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Group align='flex-start' position='apart'>
          <Title order={3} className={classes.formTitle}>
            Фильтры
          </Title>
          <Button
            classNames={{ root: classes.reset, rightIcon: classes.rightIcon }}
            rightIcon={<CrossIcon />}
            onClick={() => form.reset()}
          >
            Сбросить все
          </Button>
        </Group>
        <Select
          classNames={{
            ...classNames,
            item: classes.input,
            wrapper: classes.selectWrapper,
            rightSection: classes.industryRightSection,
          }}
          data={[
            { value: 'react', label: 'React' },
            { value: 'ng', label: 'Angular' },
            { value: 'svelte', label: 'Svelte' },
            { value: 'vue', label: 'Vue' },
          ]}
          rightSection={<DownIcon />}
          placeholder='Выберете отрасль'
          label='Отрасль'
          {...form.getInputProps('industry', { type: 'input' })}
        />
        <NumberInput
          classNames={{ ...classNames, wrapper: classes.wrapper }}
          placeholder='От'
          min={0}
          type='number'
          label='Оклад'
          {...form.getInputProps('paymentFrom')}
        />
        <NumberInput
          classNames={{ ...classNames, wrapper: classes.wrapper }}
          placeholder='До'
          min={0}
          type='number'
          {...form.getInputProps('paymentTo')}
        />
        <Button type='submit' classNames={{ root: classes.submitButton }}>
          Применить
        </Button>
      </form>
    </Box>
  );
};
