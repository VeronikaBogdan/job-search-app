import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  wrapper: {
    width: '100%',
    maxWidth: '786px',
    margin: '0 auto',
    paddingRight: '14px',
  },
  content: {
    padding: '2px 0 0 13px',
  },
  root: {
    justifyContent: 'center',
    marginTop: '29px',
  },
  control: {
    '&[data-active]': {
      '&:hover': {
        backgroundColor: theme.colors.blue[2],
      },
    },
  },
}));
