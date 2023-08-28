import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  SafeAreaView,
} from 'react-native-safe-area-context';
import { TabBarItem } from './tab-bar-item.component';
import {themeColors} from '../theme';

interface ITabBarProps {
  items: string[];
  onPressItem: (index: number, routeName: string) => void;
  icons: any
  activeIndex: number;
}

export const TabBarComponent = (props:ITabBarProps) => {
  const items = props.items.map((route: any, index) => {
    const isActive = props.activeIndex === index;
    const onPress = () => props.onPressItem(index, route);
    
    return (
      <TabBarItem
        isActive={isActive}
        onPress={onPress}
        route={route}
        icons={props.icons}
        key={index}
      />
    );
  });

  return (
    <View >
        
          <View style={styles.container}>{items}</View>
          
       
    </View>
  );
};

const styles = StyleSheet.create({
 
  container: {
    backgroundColor: themeColors.bgDark,
    borderRadius: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 15,
    position: 'relative',
  },
});
