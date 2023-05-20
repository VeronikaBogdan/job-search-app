import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '@mantine/form';
import { Box, Button, Group, NumberInput, Select, Title } from '@mantine/core';

import { getVacancies } from '@/store/reducers/vacancies';

import DownIcon from '../../assets/svg/down.svg';
import CrossIcon from '../../assets/svg/cross.svg';

import { useStyles } from './styled-filters';

export const Filters = () => {
  const dispatch = useDispatch();
  const form = useForm({
    initialValues: {
      catalogues: '',
      payment_from: '',
      payment_to: '',
    },
  });
  const [isDropdown, toggleDropdown] = useState(false);
  const { catalogues: industries } = useSelector((state) => state.catalogues);

  const { classes } = useStyles();

  const classNames = {
    input: classes.input,
    rightSection: classes.rightSection,
    control: classes.control,
    label: classes.label,
  };

  const handleDropdown = () => {
    toggleDropdown(!isDropdown);
  };

  const handleSubmit = (filteredData) => {
    dispatch(getVacancies(filteredData));
  };

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
            wrapper: isDropdown ? classes.industryWrapperFocus : classes.industryWrapper,
            rightSection: classes.industryRightSection,
          }}
          data={industries.map((industry) => {
            return { value: industry.key, label: industry.title_trimmed };
          })}
          rightSection={<DownIcon />}
          placeholder='Выберете отрасль'
          label='Отрасль'
          onDropdownOpen={handleDropdown}
          onDropdownClose={handleDropdown}
          {...form.getInputProps('catalogues', { type: 'input' })}
        />
        <NumberInput
          classNames={{ ...classNames, wrapper: classes.wrapper }}
          placeholder='От'
          min={0}
          type='number'
          label='Оклад'
          {...form.getInputProps('payment_from')}
        />
        <NumberInput
          classNames={{ ...classNames, wrapper: classes.wrapper }}
          placeholder='До'
          min={0}
          type='number'
          {...form.getInputProps('payment_to')}
        />
        <Button type='submit' classNames={{ root: classes.submitButton }}>
          Применить
        </Button>
      </form>
    </Box>
  );
};
