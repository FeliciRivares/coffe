
import { Store } from '../../typing';
import { NavGroupKey } from '../../typing/enums';

export class SetNavGroupAction implements Store.Action {
  readonly type = Store.StoreActionKey.SET_NAVIGATION_GROUP;
  constructor(public readonly payload: NavGroupKey) {}
}

export type NavActions = SetNavGroupAction;
