import React, { Suspense, useState } from 'react';
import { Text, ActivityIndicator } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import CommunityScreen from '../screens/CommunityScreen';
import NavigateScreen from '../screens/NavigateScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SpottisScreen from '../screens/SpottisScreen';
import WelcomeScreen from '../screens/WelcomeScreen';

// Components
import SpottiFullView from '../components/Spotti/SpottiFullView';
import SavedTrip from '../components/TripSection/SavedTrip';
import EmailView from '../components/WelcomeSection/EmailView';
import PasswordView from '../components/WelcomeSection/PasswordView';
import UsersNameView from '../components/WelcomeSection/UsersNameView';
import TripScreen from '../screens/TripScreen';

// Constants
import { BOTTOM_TAB_ICONS } from '../constants';
import { colors, fonts } from '../theme/theme';

import { useSelector } from 'react-redux';

// Tab and Stack Navigators
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

function AppNavigator() {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator>
        {/* Main navigation flow */}
        {isAuthenticated ? (
          <Stack.Screen
            name="Tabs"
            component={TabsNavigator}
            options={{ headerShown: false }}
          />
        ) : (
          <Stack.Screen
            name="WelcomeStack"
            component={WelcomeStack}
            options={{ headerShown: false }}
          />
        )}
        {/* SpottiFullStack - This stack is outside the TabNavigator */}
        <Stack.Screen
          name="SpottiFullStack"
          component={SpottiFullStack}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SavedTripStack"
          component={SavedTripStack}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function TabsNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Spottis"
      screenOptions={({ route }) => ({
        lazy: true,
        tabBarIcon: ({ focused }) => (
          <MaterialCommunityIcons
            name={BOTTOM_TAB_ICONS[route.name].name}
            size={BOTTOM_TAB_ICONS[route.name].size}
            color={
              focused
                ? BOTTOM_TAB_ICONS[route.name].focusedColor
                : BOTTOM_TAB_ICONS[route.name].unfocusedColor
            }
          />
        ),
        tabBarStyle: {
          backgroundColor: colors.primaryColor,
          borderTopColor: colors.borderColorDark,
        },
        tabBarLabel: ({ focused }) => (
          <Text
            style={{
              color: focused
                ? BOTTOM_TAB_ICONS[route.name].focusedColor
                : BOTTOM_TAB_ICONS[route.name].unfocusedColor,
              fontSize: 11,
              fontFamily: fonts.semiBold,
            }}
          >
            {route.name}
          </Text>
        ),
      })}
    >
      <Tab.Screen
        name="Community"
        component={CommunityScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Navigate"
        component={NavigateScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Spottis"
        component={SpottiStack}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Trips"
        component={TripStack}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

function WelcomeStack() {
  return (
    <Suspense fallback={<ActivityIndicator size="large" color="#0000ff" />}>
      <Stack.Navigator>
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EmailView"
          component={EmailView}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PasswordView"
          component={PasswordView}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="UsersNameView"
          component={UsersNameView}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TabsNavigator"
          component={TabsNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </Suspense>
  );
}

// SpottiStack stays within the TabsNavigator
function SpottiStack() {
  return (
    <Suspense fallback={<ActivityIndicator size="large" color="#0000ff" />}>
      <Stack.Navigator>
        <Stack.Screen
          name="SpottiScreen"
          component={SpottisScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </Suspense>
  );
}

// SpottiFullStack - This stack handles deeper navigation without the tab bar
function SpottiFullStack() {
  return (
    <Suspense fallback={<ActivityIndicator size="large" color="#0000ff" />}>
      <Stack.Navigator>
        <Stack.Screen
          name="SpottiFullView"
          component={SpottiFullView}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </Suspense>
  );
}

function SavedTripStack() {
  return (
    <Suspense fallback={<ActivityIndicator size="large" color="#0000ff" />}>
      <Stack.Navigator>
        <Stack.Screen
          name="SavedTrip"
          component={SavedTrip}
          // initialParams={route.params}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SpottiFullView"
          component={SpottiFullView}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </Suspense>
  );
}

function TripStack() {
  return (
    <Suspense fallback={<ActivityIndicator size="large" color="#0000ff" />}>
      <Stack.Navigator>
        <Stack.Screen
          name="TripScreen"
          component={TripScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SavedTrip"
          component={SavedTrip}
          options={{ headerShown: false, tabBarStyle: { display: 'none' } }}
        />
        <Stack.Screen
          name="SpottiFullView"
          component={SpottiFullView}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </Suspense>
  );
}

export default AppNavigator;
