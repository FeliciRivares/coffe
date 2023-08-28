import { SetNavGroupAction } from "../../store/navigation";
import { NavGroupKey } from "../../typing";
import { storageService } from "../system";
import { accountService } from "./account.service";
import { Service } from "./service.service";

class AppService extends Service {
  constructor() {
    super();
    this.init();
  }

  private async init() {
    const refreshToken = await storageService.get('REFRESH_TOKEN');
    if (!refreshToken) this.dispatch(new SetNavGroupAction(NavGroupKey.Auth));
    this.dispatch(new SetNavGroupAction(NavGroupKey.Loading));

    const isAccountLoaded = await accountService.load();
    if (!isAccountLoaded)
      this.dispatch(new SetNavGroupAction(NavGroupKey.Auth));
  }
}

export const appService = new AppService();
