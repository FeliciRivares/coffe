import _ from 'lodash';
import { Store } from '../../typing';


//ACCOUNT

export const selectIsAccountLoaded = (store: Store.Root) => {
  return store.account?.info?.isLoading;
};

export const selectAccount = (store: Store.Root) => {
  return store.account.info;
};

export const selectAccountId = (store: Store.Root) => {
  return selectAccount(store).data?.id;
};

