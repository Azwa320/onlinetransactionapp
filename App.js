import * as React from 'react';
import firebase from 'firebase';
import QRScanner from './Screens/QRScanner';
import MainScreen from './Screens/MainScreen';
import LoginScreen from './Screens/loginScreen';
import firebaseConfig from './Config';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import DashboardScreen from './Screens/DashboardScreen';
import LoadingScreen from './Screens/loadingScreen';
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}
const tabNavigator = createBottomTabNavigator({
  LoginScreen: LoginScreen,
  MainScreen: MainScreen,
  QRScanner: QRScanner,
});

const AppContainer = createAppContainer(tabNavigator);

export default function App() {
  return <AppContainer />;
}
