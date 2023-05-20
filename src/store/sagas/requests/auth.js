import axios from 'axios';

import { HOST } from '@/app-constants';

export const instance = axios.create({
  baseURL: HOST,
});

instance.interceptors.response.use(
  (res) => {
    const { access_token } = res.data;
    console.log('111');
    // localStorage.setItem('access_token', access_token);
    return res;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const config = {
  headers: { 'x-secret-key': 'GEU4nvd3rej*jeh.eqp' },
  params: {
    login: 'sergei.stralenia@gmail.com',
    password: 'paralect123',
    client_id: '2356',
    client_secret: 'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948',
    hr: '0',
  },
};

// export const requestGetAuth = () => axios.get(`${HOST}/oauth2/password`, config);
export const requestGetAuth = () => instance.get(`${HOST}/oauth2/password`, config);
