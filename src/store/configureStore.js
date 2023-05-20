import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from '@redux-saga/core';

import authReducer from './reducers/auth';
import cataloguesReducer from './reducers/catalogues';
import vacanciesReducer from './reducers/vacancies';
import vacancyReducer from './reducers/vacancy';
import {
  watcherSagaForAuth,
  watcherSagaForCatalogues,
  watcherSagaForVacancies,
  watcherSagaForVacancy,
} from './sagas/rootSaga';

const reducer = combineReducers({
  auth: authReducer,
  catalogues: cataloguesReducer,
  vacancies: vacanciesReducer,
  vacancy: vacancyReducer,
});

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = createStore(reducer, {}, compose(applyMiddleware(...middleware)));

sagaMiddleware.run(watcherSagaForAuth);
sagaMiddleware.run(watcherSagaForCatalogues);
sagaMiddleware.run(watcherSagaForVacancies);
sagaMiddleware.run(watcherSagaForVacancy);

export default store;
