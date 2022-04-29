import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './TabNavigator';
import LoginScreen from '../Screens/loginScreen';

const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={TabNavigator} />
      <Stack.Screen name="Loginscreen" component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
