import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  TextInput,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import * as Google from 'expo-google-app-auth';
import firebase from 'firebase';
import AppHeader from '../components/AppHeader';

import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';

let customFonts = {
  'Bubblegum-Sans': require('../assets/fonts/BubblegumSans-Regular.ttf'),
};

export default class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      accountNumber: '',
      amountOfMoney: '',
    };
  }
  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <AppHeader />
        <TextInput
          placeholder="Name Of Person "
          onChangeText={(text) => this.setState({ title: text })}
          value={this.state.title}
          style={styles.title}
          placeholderTextColor="black"
        />
        <TextInput
          placeholder="Account Number"
          onChangeText={(text) => this.setState({ autor: text })}
          value={this.state.author}
          style={styles.author}
          placeholderTextColor="black"
        />
        <TextInput
          placeholder="Amount of money"
          onChangeText={(text) => this.setState({ storyText: text })}
          value={this.state.storyText}
          style={styles.storyText}
          placeholderTextColor="black"
          multiline={true}
        />
        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.buttonText}>Send</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  title: {
    height: 50,
    borderWidth: 2,
    marginTop: 40,
    margin: 10,
    color: 'black',
    padding: 6,
  },
  author: { height: 50, borderWidth: 2, margin: 10, padding: 6 },
  storyText: {
    height: 250,
    borderWidth: 2,
    margin: 10,
    padding: 6,
    flex: 1,
    backgroundColor: '#fff',
  },
  name: {
    height: 50,
    borderWidth: 2,
    marginTop: 40,
    margin: 10,
    color: 'black',
    padding: 6,
  },
  number: { height: 50, borderWidth: 2, margin: 10, padding: 6 },
  amount: { height: 50, borderWidth: 2, margin: 10, padding: 6 },
  submitButton: {
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: 'red',
    width: 80,
    height: 40,
    color: 'black',
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    color: 'black',
  },
});
