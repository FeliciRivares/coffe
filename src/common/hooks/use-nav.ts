import { useNavigation as useNavigationNative } from '@react-navigation/native';
import { RouteKey } from '~typing';

type UseNavigation = () => {
  navigate: (key: RouteKey, params?: Record<any, any>) => void;
  push: (key: RouteKey, params?: Record<any, any>) => void;
  goBack: () => void;
  reset: any;
  dispatch: any;
};

export const useNav = useNavigationNative as UseNavigation;

export const resetNav = (nav: any, route: string, params: any = {}) => {
  nav.reset({
    index: 0,
    routes: [{ name: route, params }],
  });
};

