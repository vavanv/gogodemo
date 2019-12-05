import { UIState } from 'src/store/ui/types';
import { StopsState } from 'src/store/stops/types';

export type Payload = any;

export interface AppState {
  ui: UIState;
  stopList: StopsState;
}

export interface AnyAction {
  type: string;
  params?: any;
  payload?: Payload;
  error?: string;
}

export interface RequestAction {
  type: string;
  params: any;
}

export interface SuccessAction {
  type: string;
  payload: Payload;
}

export interface FailureAction {
  type: string;
  error: any;
}

export interface AsyncActions {
  REQUEST: string;
  SUCCESS: string;
  FAILURE: string;
}
