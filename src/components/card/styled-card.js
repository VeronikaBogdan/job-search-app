import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  card: {
    padding: '23px 20px 19px 22px',
    backgroundColor: theme.colors.grey[0],
    border: `1px solid ${theme.colors.grey[3]}`,
    borderRadius: '12px',

    '&:hover': {
      cursor: 'pointer',
    },

    '&:active': {
      opacity: '0.7',
    },
  },
  professionTitle: {
    fontWeight: '600',
    fontSize: '20px',
    lineHeight: '24px',
    color: theme.colors.blue[1],
    marginTop: '1px',
    marginLeft: '1px',
  },
  paymentText: {
    fontWeight: '600',
    fontSize: '16px',
    lineHeight: '20px',
    color: theme.colors.grey[7],
    marginTop: '-2px',
    marginLeft: '1px',
  },
  workText: {
    marginLeft: '-3px',
    marginTop: '-2px',
  },
  locationText: {
    alignItems: 'center',
    marginTop: '-3px',
    marginLeft: '9px',
  },
}));
