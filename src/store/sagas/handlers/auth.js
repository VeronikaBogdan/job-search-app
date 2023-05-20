import { call, put } from 'redux-saga/effects';
import { succeedAuth, failAuth } from '@/store/reducers/auth';
import { requestGetAuth } from '../requests/auth';

export function* handleGetAuth() {
  try {
    const response = yield call(requestGetAuth);
    const { data } = response;
    console.log('data response', data.access_token);
    // localStorage.setItem(
    //   'access_token',
    //   'v3.r.137440105.d5cbe4e35936b22a5446745c426d4b6ee1b5f76b.d31b30e936d14c9ab12af5026fd2fc47c442d0da'
    // );
    // localStorage.setItem('access_token', data.access_token);
    yield put(succeedAuth(data));
  } catch (error) {
    yield put(failAuth(error));
  }
}
