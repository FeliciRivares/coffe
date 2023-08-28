import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
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
import { HomeScreen } from '../screens/home.screen';
import { themeColors } from '../theme';

export {NavigationContainer} from '@react-navigation/native';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const ios = Platform.OS == 'ios';
LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

export const AppNavigation = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator
        screenOptions={{
          contentStyle: {backgroundColor: 'white'},
        }}>
        <Stack.Screen
          name="Home"
          options={{headerShown: false}}
          component={HomeTabs}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeTabs = () => {
  return (
    <Tab.Navigator 
    screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ focused }) => menuIcons(route, focused),
        tabBarStyle: {
          marginBottom: 20,
          height: 75,
          alignItems: 'center',
          
          borderRadius: 100,
          marginHorizontal: 20,
          backgroundColor: themeColors.bgLight,

        },
        tabBarItemStyle: {
          marginTop: ios? 30: 0,
          
        }
      })}
    >
      <Tab.Screen name="home" component={HomeScreen} />
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
  } else if (route.name === 'favourite') {
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

  const  buttonClass = focused ? '#fff' : '';

  return (
    <View
      style={[styles.button,{backgroundColor: buttonClass}]}>
      {icon}
    </View>
  );
};


const styles = StyleSheet.create({
    button: {
        padding: 3,
        alignItems: 'center',
        borderRadius: 50, 
        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'
    },
  });