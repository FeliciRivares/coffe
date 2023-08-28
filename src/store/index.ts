import {combineReducers, createStore} from 'redux';
import { Store } from '../typing';

import {accountReducer} from './account/reducer';
import {navigationReducer} from './navigation';

const rootReducer = combineReducers<Store.Root>({
  navigation: navigationReducer,
  account: accountReducer,
});
export const store = createStore(rootReducer);
