import { call, put } from 'redux-saga/effects';
import { succeedVacancies, failVacancies } from '@/store/reducers/vacancies';
import { requestGetVacancies } from '../requests/vacancies';

export function* handleGetVacancies(action) {
  try {
    const response = yield call(requestGetVacancies, action.searchData);
    const { objects } = response.data;
    console.log('333');
    yield put(succeedVacancies(objects));
  } catch (error) {
    yield put(failVacancies(error));
  }
}
