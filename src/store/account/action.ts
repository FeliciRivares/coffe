import { Store } from "../../typing";

export class SaveAccount implements Store.Action {
  readonly type = Store.StoreActionKey.SET_ACCOUNT;
  constructor(public readonly payload: any) {}
}





export type AccountActions = SaveAccount 
