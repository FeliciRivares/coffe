
import React, {FC, useEffect, useMemo, useState} from 'react';
import {TabBarComponent } from '../../components/tab-bar.component'
import {Keyboard, Platform} from 'react-native';
import { tabBarConfig } from '../../config/tab-bar.config';

interface IProps {
  state: {index: number; routeNames: string[]};
  navigate: (routeName: string) => void;
}

export const TabBarSmart = ({state, navigate}:IProps) => {
  const [showTab, setShowTab] = useState(true);

  const onPressItem = (index: number, routeName: string) => {
    if (state.index !== index) navigate(routeName);
  };


  const renderTabBarOnAndroid = useMemo(() => {
    return (
      <>
        {showTab ? (
          <TabBarComponent
            activeIndex={state.index}
            onPressItem={onPressItem}
            icons={tabBarConfig}
            items={state.routeNames}
          />
        ) : null}
      </>
    );
  }, [showTab, state.index, Keyboard]);


  useEffect(() => {
    const _keyboardDidShow = () => {
      setShowTab(false);
    };

    const _keyboardDidHide = () => {
      setShowTab(true);
    };

    const sub = Keyboard.addListener('keyboardDidShow', _keyboardDidShow);
    const sub2 = Keyboard.addListener('keyboardDidHide', _keyboardDidHide);

    return () => {
      Keyboard.removeSubscription(sub);
      Keyboard.removeSubscription(sub2);
    };
  }, []);




  return Platform.OS === 'android' ? (
    renderTabBarOnAndroid
  ) : (
    <TabBarComponent
      activeIndex={state.index}
      onPressItem={onPressItem}
      icons={tabBarConfig}
      items={state.routeNames}
    />
  );
};

