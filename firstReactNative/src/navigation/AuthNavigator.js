import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Login, SignupScreen} from '../screens';

const Stack = createStackNavigator();

export default AuthNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: null,
    }}>
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="SignupScreen" component={SignupScreen} />
  </Stack.Navigator>
);
