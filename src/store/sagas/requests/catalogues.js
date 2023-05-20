import axios from 'axios';

import { HOST } from '@/app-constants';
import { headers } from '@/store/sagas/requests/headers';

export const requestGetCatalogues = () =>
  axios.get(`${HOST}/catalogues/`, {
    headers: headers,
  });
