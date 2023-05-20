import axios from 'axios';

import { HOST } from '@/app-constants';
import { headers } from '@/store/sagas/requests/headers';

export const requestGetVacancy = (vacancyId) => {
  return axios.get(`${HOST}/vacancies/${vacancyId}`, {
    headers: headers,
  });
};
