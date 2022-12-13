import React,  { useState, useEffect } from 'react';
import {SafeAreaView, Text, StyleSheet, Image } from 'react-native';
import DocumentScanner from 'react-native-document-scanner-plugin'

export default function DetailsScreen({navigation}) {
  const [scannedImage, setScannedImage] = useState();

  const scanDocument = async () => {
    // start the document scanner
    const { scannedImages } = await DocumentScanner.scanDocument()
  
    // get back an array with scanned image file paths
    if (scannedImages.length > 0) {
      // set the img src, so we can view the first scanned image
      setScannedImage(scannedImages[0])
    }
  }

  useEffect(() => {
    // call scanDocument on load
    scanDocument()
  }, []);
  
  return(
        <SafeAreaView style={styles.container}>

            <Image
               resizeMode="contain"
               style={{ width: '100%', height: '100%' }}
               source={{ uri: scannedImage }}
              />
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