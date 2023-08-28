import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { useMemo } from 'react';
import {LogBox, StyleSheet, View} from 'react-native';
import {Platform} from 'react-native';

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
import { DetailedScreen } from '../screens/detailed.screen';
import {HomeScreen} from '../screens/home.screen';
import {themeColors} from '../theme';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const ios = Platform.OS == 'ios';
LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          contentStyle: {backgroundColor: '#fff'},
        }}>
        <Stack.Screen
          name="home"
          options={{headerShown: false}}
          component={HomeTabs}
        />
         <Stack.Screen
          name="detailed"
          options={{headerShown: false}}
          component={DetailedScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({focused}) => menuIcons(route, focused),
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
        },
      })}>
      <Tab.Screen name="hdvome" component={HomeScreen} />
      <Tab.Screen name="detailed" component={DetailedScreen} />
      <Tab.Screen name="cart" component={HomeScreen} />
    </Tab.Navigator>
  );
};

const menuIcons = (route: any, focused: boolean) => {
  let icon;

  if (route.name === 'home') {
    icon = focused ? (
      <HomeSolid size="30" color={themeColors.bgLight} />
    ) : (
      <HomeOutline size="30" strokeWidth={2} color="white" />
    );
  } else if (route.name === 'detailed') {
    icon = focused ? (
      <HeartSolid size="30" color={themeColors.bgLight} />
    ) : (
      <HeartOutline size="30" strokeWidth={2} color="white" />
    );
  } else if (route.name === 'cart') {
    icon = focused ? (
      <BagSolid size="30" color={themeColors.bgLight} />
    ) : (
      <BagOutline size="30" strokeWidth={2} color="white" />
    );
  }

  const buttonClass = focused ? '#fff' : '';

  return (
    <View style={[styles.button, {backgroundColor: buttonClass}]}>{icon}</View>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 3,
    alignItems: 'center',
    borderRadius: 50,
    shadowColor: themeColors.bgDark,
    shadowRadius: 25,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.8,
  },
});
