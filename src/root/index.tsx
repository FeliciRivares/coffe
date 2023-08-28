import React, {useEffect, useMemo} from 'react';

import '../service/domain/app.service';

import {useSafeAreaInsets} from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';
import {useSelector} from 'react-redux';

import '../../src/service/domain/app.service';
import {RootLoadingScreen} from './components/loading-screen';
import {selectNavGroup} from '../store/navigation';
import {AuthRouteKey, NavGroupKey} from '../typing';
import {gcService} from '../common';
import {UserStackGroup} from '../navigation/user-group.rout';
import {AuthStackGroup} from '../navigation/auth-group.rout';

const modules = {
  [NavGroupKey.User]: <AuthStackGroup />,
  [NavGroupKey.Auth]: <UserStackGroup />,
  [NavGroupKey.Loading]: <RootLoadingScreen />,
};

export const Root = () => {
  const insets = useSafeAreaInsets();
  const activeModule = useSelector(selectNavGroup);

  useEffect(() => {
    gcService.set('insetsTop', insets.top);
  }, [insets.top]);

  const init = async () => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 200);
  };

  React.useEffect(() => {
    init();
  }, []);

  const navigation = useMemo(() => modules[activeModule], [activeModule]);

  return <>{navigation}</>;
};
