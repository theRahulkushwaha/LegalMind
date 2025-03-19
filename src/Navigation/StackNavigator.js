import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen/HomeSceen';
import Something from '../Screens/Something';


const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Something" component={Something} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
