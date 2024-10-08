import React, { Suspense, useState } from 'react';
import { Text, ActivityIndicator } from "react-native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // Updated import for native stack

import SpottisScreen from "../screens/SpottisScreen";
import ProfileScreen from "../screens/ProfileScreen";
import NavigateScreen from "../screens/NavigateScreen";
import SpottiFullView from "../components/SpottiFullView";
import SavedScreen from "../screens/SavedScreen";
import CommunityScreen from "../screens/CommunityScreen";
import SavedList from "../components/Saved/SavedList";
import LoginScreen from '../screens/LoginScreen';

import { BOTTOM_TAB_ICONS } from "../constants";
import { colors } from "../theme/theme";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const linking = {
  prefixes: ['hotspotti-mobile://'],
  config: {
    screens: {
      Spottis: {
        screens: {
          SpottiScreen: '',
          SpottiFullView: 'spotti/:id',
        },
      },
    },
  },
};

function SpottiStack() {
  return (
    <Suspense fallback={<ActivityIndicator size='large' color='#0000ff' />}>
      <Stack.Navigator>
        <Stack.Screen
          name="SpottiScreen"
          component={SpottisScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SpottiFullView" 
          component={SpottiFullView}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </Suspense>
  )
}

function SavedStack() {
  return (
    <Suspense fallback={<ActivityIndicator size='large' color='#0000ff' />}>
      <Stack.Navigator>
        <Stack.Screen
          name="SavedScreen"
          component={SavedScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="SavedList"
          component={SavedList}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="SpottiFullView"
          component={SpottiFullView}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </Suspense>
  )
}

function TabsNavigator() {
const [isLoggedIn, setIsLoggedIn] = useState(false);

if (!isLoggedIn) {
  return <LoginScreen onLogin={setIsLoggedIn} />;
}

  return (
    <NavigationContainer linking={linking}>
      <Tab.Navigator
        initialRouteName="Spottis"
        screenOptions={({ route }) => ({
          lazy: true,
          tabBarIcon: ({ focused }) => {
            return (
              <MaterialCommunityIcons 
                name={BOTTOM_TAB_ICONS[route.name].name}
                size={BOTTOM_TAB_ICONS[route.name].size}
                color={focused ?
                  BOTTOM_TAB_ICONS[route.name].focusedColor 
                  : BOTTOM_TAB_ICONS[route.name].unfocusedColor}
                style={route.name === 'Spottis' ? 
                  {} 
                  : {marginBottom: -16}}
              />
            )
          },
          tabBarStyle: {
            backgroundColor: colors.primaryColor,
            height: 55,
            borderTopColor: colors.borderColorDark,
          },
          tabBarLabel: ({ focused }) => {
            return (
              <Text style={{ 
                color: focused ? 
                  BOTTOM_TAB_ICONS[route.name].focusedColor 
                  : BOTTOM_TAB_ICONS[route.name].unfocusedColor, fontSize: 11 }}>
                {route.name}
              </Text>
            );
          },
        })}
      >
        <Tab.Screen
          name='Community'
          component={CommunityScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name='Navigate'
          component={NavigateScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen 
          name='Spottis' 
          component={SpottiStack} 
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name='Saved'
          component={SavedStack}
          options={{ headerShown: false }}
        />
        <Tab.Screen 
          name='Profile' 
          component={ProfileScreen} 
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default TabsNavigator;
