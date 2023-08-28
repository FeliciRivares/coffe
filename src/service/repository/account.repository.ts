import { Repository } from "./repository";

class AccountRepository extends Repository {
  constructor() {
    super('account');
  }

  public get() {
    return this._get<any>('');
  }

}

export const accountRepository = new AccountRepository();
