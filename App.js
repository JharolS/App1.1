/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

//vertically oriented device layout

import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import Loggin from "./src/loggin/index.js"
import Info from "./src/letter/index.js"

const App = () => {
  return (
    <View style={styles.container}>
      <Loggin/>
      <Info />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'black',
    padding: 20,
  }
});

export default App;
