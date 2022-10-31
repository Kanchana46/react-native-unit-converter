import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Constants from 'expo-constants'
import MeasureView from './components/MeasureView';
import HeaderView from './components/HeaderView';

const App = () => {
  const [value, setValue] = useState('0');
  const renderScene = ({ route }) => {
    return <MeasureView measure={route.key} route={route.key} value={value} setValue={setValue} />
  }

  return (
    <View style={[styles.scene, { marginTop: Constants.statusBarHeight }]}>
      <Text style={styles.title}>Unit Converter</Text>
      <HeaderView renderScene={renderScene} />
    </View>
  );
}

const styles = StyleSheet.create({
  scene: {
    flex: 1
  },
  title: {
    padding: 15,
    fontWeight: 'bold',
    color: '#052F5F',
    fontSize: 20,
    textAlign: 'center',
    textTransform: 'uppercase'
  }
});

export default App;