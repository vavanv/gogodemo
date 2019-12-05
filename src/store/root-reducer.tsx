import { combineReducers } from 'redux';

import { AppState } from 'src/store/types';
import { initialUIState, uiReducer } from 'src/store/ui/reducer';
import { initialState as initialStopList, stopListReducer } from 'src/features/stops/reducer';

export const initialState: AppState = {
  ui: initialUIState,
  stopList: initialStopList,
};

export const rootReducer = combineReducers({
  ui: uiReducer,
  stopList: stopListReducer,
});
