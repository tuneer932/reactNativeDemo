import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginComponent from '../screens/Authentication/LoginComponent';

const AuthStack = createStackNavigator();

export default function AuthenticateNavigator() {
    return (
        <>
            <AuthStack.Navigator>
                <AuthStack.Screen
                    name="LoginComponent"
                    options={{
                        title: "Login Screen"
                    }}
                    component={LoginComponent}
                />
            </AuthStack.Navigator>
        </>
  );
}
