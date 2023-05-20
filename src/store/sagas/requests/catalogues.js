import axios from 'axios';

import { HOST } from '@/app-constants';

const config = {
  headers: {
    Authorization: `Bearer v3.r.137440105.d5cbe4e35936b22a5446745c426d4b6ee1b5f76b.d31b30e936d14c9ab12af5026fd2fc47c442d0da`,
    // Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    'x-secret-key': 'GEU4nvd3rej*jeh.eqp',
    'X-Api-App-Id': 'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948',
  },
};

export const requestGetCatalogues = () => axios.get(`${HOST}/catalogues`, config);
