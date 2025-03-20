import React from 'react';
import { Image } from 'react-native';
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

const homeIcon = require('../Assets/Icons/home.png');
const chatIcon = require('../Assets/Icons/bot.png');
const legalCasesIcon = require('../Assets/Icons/legal.png');
const myDocsIcon = require('../Assets/Icons/docs.png');
const settingsIcon = require('../Assets/Icons/setting.png');


const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconSource;

          switch (route.name) {
            case 'HomeTab':
              iconSource = homeIcon;
              break;
            case 'Chat':
              iconSource = chatIcon;
              break;
            case 'LegalCases':
              iconSource = legalCasesIcon;
              break;
            case 'MyDocs':
              iconSource = myDocsIcon;
              break;
            case 'Settings':
              iconSource = settingsIcon;
              break;
            default:
              iconSource = homeIcon;
          }

          return (
            <Image
              source={iconSource}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? 'blue' : 'gray', // Change color on focus
              }}
              resizeMode="contain"
            />
          );
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
