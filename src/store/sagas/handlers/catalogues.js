import { call, put } from 'redux-saga/effects';
import { succeedCatalogues, failCatalogues } from '@/store/reducers/catalogues';
import { requestGetCatalogues } from '../requests/catalogues';

export function* handleGetCatalogues() {
  try {
    const response = yield call(requestGetCatalogues);
    const { data } = response;
    yield put(succeedCatalogues(data));
  } catch (error) {
    yield put(failCatalogues(error));
  }
}
