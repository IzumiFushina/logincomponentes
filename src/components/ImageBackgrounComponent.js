// ImageBackgroundComponent.js

import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

const ImageBackgroundComponent = ({ source, children }) => (
  <ImageBackground source={source} style={styles.background}>
    {children}
  </ImageBackground>
);

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', 
  },
});

export default ImageBackgroundComponent;
