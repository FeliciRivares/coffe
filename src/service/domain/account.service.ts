import _ from 'lodash';
import { SaveAccount } from '../../store/account/action';
import { SetNavGroupAction } from '../../store/navigation';
import { NavGroupKey } from '../../typing';
import { accountRepository } from '../repository/account.repository';
import { Service } from './service.service';


class AccountService extends Service {
  public async load() {
    try {
      const response = await accountRepository.get();
      const account = response.data;
      this.dispatch(new SaveAccount(account));

      

      this.dispatch(new SetNavGroupAction(NavGroupKey.User));
      return true;
    } catch (e) {
      this.dispatch(new SaveAccount(null));
      return false;
    }
  }
}

export const accountService = new AccountService();
