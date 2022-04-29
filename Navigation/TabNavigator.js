import React from 'react';
import { StyleSheet } from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';

import LoginScreen from '../Screens/loginScreen';
import MainScreen from '../Screens/MainScreen';
const Tab = createMaterialBottomTabNavigator();
import firebase from 'firebase'

export default class BottomTabNavigator extends React.Component {
  constructor() {
    super();
    this.state = {
      light_theme: true,
      isUpdated:false,

    };
  }
  changeUpdated=()=>{
    this.setState({
      isUpdated:true
    })
  }
  removeUpdated=()=>{
    this.setState({isUpdated:false})
  }
  componentDidMount() {
    let theme;
    firebase
      .database()
      .ref('/users/' + firebase.auth().currentUser.uid)
      .on('value', function (snapshot) {
        theme = snapshot.val().current_theme;
      });
    this.setState({ light_theme: theme === 'light' ? true : false });
  }
  render() {
    
    return (
      <Tab.Navigator
        labeled={false}
        barStyle={
          this.state.light_theme
            ? styles.bottomTabStyle_light
            : styles.bottomTabStyle
        }
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Feed') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Create Story') {
              iconName = focused ? 'add-circle' : 'add-circle-outline';
            }
            return (
              <Ionicons
                name={iconName}
                size={RFValue(25)}
                color={color}
                style={styles.icons}
              />
            );
          },
        })}
        activeColor={'#ee8249'}
        inactiveColor={'gray'}>
        <Tab.Screen
          name="Feed"
          component={Feed}
          options={{ unmountOnBlur: true }}
        />
        <Tab.Screen
          name="Create Story"
          component={CreateStory}
          options={{ unmountOnBlur: true }}
        />
      </Tab.Navigator>
    );
  }
}

const styles = StyleSheet.create({
  bottomTabStyle: {
    backgroundColor: '#2f345d',
    height: '8%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: 'hidden',
    position: 'absolute',
  },
  bottomTabStyle_light: {
    backgroundColor: '#eaeaea',
    height: '8%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: 'hidden',
    position: 'absolute',
  },
  icons: {
    width: RFValue(30),
    height: RFValue(30),
  },
});