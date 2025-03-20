import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../Auth/LoginScreen';
import SignUpScreen from '../Auth/SignUpScreen';

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
