import { all, fork } from 'redux-saga/effects';

import { stopListItemWatcher } from 'src/features/stops/sagas';

export function* rootSaga() {
  yield all([
    fork(stopListItemWatcher),
  ]);
}
