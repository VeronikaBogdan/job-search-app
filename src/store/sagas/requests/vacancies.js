import axios from 'axios';

import { HOST } from '@/app-constants';
import { headers } from '@/store/sagas/requests/headers';

export const requestGetVacancies = (searchData) => {
  return axios.get(`${HOST}/vacancies/`, {
    headers: headers,
    params: {
      published: 1,
      no_agreement: 1,
      count: 4,
      ...searchData,
    },
  });
};
