import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import MainContainer from './navigation/MainContainer';

export default function App() {

  return (
    // <SafeAreaView style={styles.container}>
    //   <Text style={styles.titleText}>Hello Dickytall!</Text>
    //   <Image source={require('./assets/drop.webp')} 
    //   />
    
    // </SafeAreaView>
      <MainContainer/>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2D3E44',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    color: '#fff',
    fontSize: 24,
  },
});
