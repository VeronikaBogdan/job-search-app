import axios from 'axios';

import { HOST } from '@/app-constants';
import { getHeaders } from '@/store/sagas/requests/headers';

export const requestGetVacancy = (vacancyId) => {
  const headers = getHeaders(vacancyId?.token);

  return axios.get(`${HOST}/vacancies/${vacancyId.vacancyId}/`, {
    headers: headers,
  });
};
