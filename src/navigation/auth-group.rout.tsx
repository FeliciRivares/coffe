import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Text, View} from 'react-native';
import {AuthRouteKey} from '../typing';

const AuthStack = createNativeStackNavigator();

export const AuthStackGroup = () => (
  <AuthStack.Navigator
    screenOptions={{headerShown: false, contentStyle: {backgroundColor: '#fff'},}}
    initialRouteName={AuthRouteKey.Welcome}>
    <AuthStack.Screen name={AuthRouteKey.Welcome} component={AuthRout} />
  </AuthStack.Navigator>
);

const AuthRout = () => {
  return (
    <View>
      <Text>Auth Rout</Text>
    </View>
  );
};
