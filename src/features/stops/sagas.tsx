import { FETCH_STOP_LIST_ITEMS, fetchStopListItemsAction } from 'src/features/stops/actions';

import { fetchStopListItems } from 'src/api/stops';
import { call, all, takeLatest, put } from 'redux-saga/effects';

export function* requestStopList() {
  try {
    const response: { value: any } = yield call(fetchStopListItems);
    yield put(fetchStopListItemsAction.success(response));
  } catch (error) {
    yield put(fetchStopListItemsAction.failure(error));
  }
}

export function* stopListItemWatcher() {
  yield all([takeLatest(FETCH_STOP_LIST_ITEMS.REQUEST, requestStopList)]);
}
