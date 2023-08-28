import React, {FC, ReactNode} from 'react';

import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {$size} from '../common/helpers';
import {
  HomeIcon as HomeOutline,
  HeartIcon as HeartOutline,
  ShoppingBagIcon as BagOutline,
} from 'react-native-heroicons/outline';
import {
  HomeIcon as HomeSolid,
  HeartIcon as HeartSolid,
  ShoppingBagIcon as BagSolid,
} from 'react-native-heroicons/solid';

interface TabBarItemProps {
  isActive: boolean;
  onPress: () => void;
  route: string;
  icons: any;
}

export const TabBarItem: FC<TabBarItemProps> = ({
  onPress,
  route,
  icons,
  isActive,
}) => {
  return (
    
    <TouchableOpacity onPress={onPress} style={[styles.item]}>
      <View style={styles.icon}>
        {isActive ? <HomeSolid color={'#fff'} /> : <Text>No active</Text>}
      </View>
    </TouchableOpacity>
  );
};



//   <View>{icons[route].active as ReactNode}</View>
// ) : (
//   <View>{icons[route]?.default as ReactNode}</View>

const styles = StyleSheet.create({
  item: {
    paddingVertical: Platform.OS === 'ios' ? 20 : $size(16),
    justifyContent: 'center',
    alignItems: 'center',
    width: '25%',
  },
  icon: {
    width: $size(80),
    height: $size(80),
  },
  title: {
    fontSize: $size(24),
    color: '#fff',
  },
});
