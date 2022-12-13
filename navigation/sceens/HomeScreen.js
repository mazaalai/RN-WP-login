import * as React from 'react';
import {SafeAreaView, Text, StyleSheet } from 'react-native';

export default function HomeScreen({navigation}) {
    return(
        <SafeAreaView style={styles.container}>
            <Text onPress={() => alert('This is the "Home" screen.')}
            style={styles.titleText}>
                Home Screen
            </Text>
        </SafeAreaView>
    )
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