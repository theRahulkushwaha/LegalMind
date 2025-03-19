import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Import screens
import HomeScreen from '../Screens/HomeScreen/HomeSceen'
import ChatScreen from '../Screens/ChatScreen/ChatScreen';
import LegalCasesScreen from '../Screens/LegalCasesScreen/LegalCasesScreen';
import MyDocScreen from '../Screens/MyDocScreen/MyDocScreen';
import SettingsScreen from '../Screens/SettingsScreen/SettingsScreen';

import StackNavigator from './StackNavigator'; 

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          switch (route.name) {
            case 'HomeTab':
              iconName = 'home-outline';
              break;
            case 'Chat':
              iconName = 'chatbubble-outline';
              break;
            case 'LegalCases':
              iconName = 'briefcase-outline';
              break;
            case 'MyDocs':
              iconName = 'document-text-outline';
              break;
            case 'Settings':
              iconName = 'settings-outline';
              break;
            default:
              iconName = 'help-circle-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { backgroundColor: '#020b1c', height: 65 }
      })}
    >
      <Tab.Screen name="HomeTab" component={StackNavigator} options={{ headerShown: false }} />
      <Tab.Screen name="Chat" component={ChatScreen} options={{ headerShown: false }} />
      <Tab.Screen name="LegalCases" component={LegalCasesScreen} options={{ headerShown: false }} />
      <Tab.Screen name="MyDocs" component={MyDocScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Settings" component={SettingsScreen} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
