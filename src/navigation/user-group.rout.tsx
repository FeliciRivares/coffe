import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import { TabBarSmart } from '../common/smart/tab-bar.smart';

import {DetailedScreen} from '../screens/detailed.screen';
import {HomeScreen} from '../screens/home.screen';
import {themeColors} from '../theme';
import {AuthRouteKey, UserRouteKey} from '../typing';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      
      headerShown: false,
       tabBarStyle: {
      marginBottom: 20,
      height: 75,
      alignItems: 'center',

      borderRadius: 100,
      marginHorizontal: 20,
      backgroundColor: themeColors.bgLight,
    },
    tabBarItemStyle: {
      marginTop: 30,
    },}}
    initialRouteName={UserRouteKey.Home}
    tabBar={({state, navigation}) => (
      <TabBarSmart
        state={state}
        navigate={navigation.navigate}
      />
    )}>
    <Tab.Screen name={UserRouteKey.Home} component={HomeScreen} />
    <Tab.Screen name={UserRouteKey.Detailed} component={DetailedScreen} />
  </Tab.Navigator>
);

interface Props {
  navigate?: (name: AuthRouteKey) => void;
}

export const UserStackGroup: FC<Props> = ({navigate}) => (
  <Stack.Navigator
    screenOptions={{headerShown: false, contentStyle: {backgroundColor: '#fff'},}}
    initialRouteName={'tabs'}>
    <Stack.Screen name={UserRouteKey.Home} component={TabNavigator} />
    <Stack.Screen name={UserRouteKey.Detailed} component={DetailedScreen} />
  </Stack.Navigator>
);
