import { CLIENT_SECRET, X_SECRET_KEY } from '@/app-constants';

const token = 'v3.r.137440105.d5cbe4e35936b22a5446745c426d4b6ee1b5f76b.d31b30e936d14c9ab12af5026fd2fc47c442d0da';
// const token = typeof window !== 'undefined' ? sessionStorage.getItem('access_token') : null;

export const headers = {
  Authorization: `Bearer ${token}`,
  'x-secret-key': X_SECRET_KEY,
  'X-Api-App-Id': CLIENT_SECRET,
};
