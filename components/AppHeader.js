import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

class AppHeader extends React.Component {
  render() {
    return (
      <View style={styles.textContainer}>
        <Text style={styles.text}>Please Fill In The Details For Money Transaction</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  textContainer: {
    backgroundColor: 'black',
  },
  text: {
    color: 'white',
    padding: 20,
    fontSize: 22,
    fontWeight: 'bold',
    alignItems: 'top',
    marginTop: 0,
  },
});

export default AppHeader;
