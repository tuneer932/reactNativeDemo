import React, { useEffect } from 'react';
import DrawerContainer from './DrawerContainer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AuthenticateNavigator from './AuthenticateNavigator';

const AppStack = createStackNavigator();

export default function AppNavigation(props) {
  return (
    <NavigationContainer>
      <AppStack.Navigator>
        <AppStack.Screen
          name="AuthenticateNavigator"
          options={{
            headerShown: false
          }}
          component={AuthenticateNavigator}
        />
        <AppStack.Screen
          name="HomeNavigator"
          component={DrawerContainer}
          options={{
            headerShown: false
          }}
        />
        </AppStack.Navigator>
    </NavigationContainer>
  );
}
