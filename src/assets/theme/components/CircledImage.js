// rfsp
import React from 'react';
import { View, ImageBackground } from 'react-native';
import styles from '../styles/app';

export default ({ url }) => {
  const { circledImage, circledImageBox, centeredItemsContainer } = styles;
  return (
    <View style={[circledImageBox, centeredItemsContainer]}>
      <View style={circledImage}>
        <ImageBackground
          style={{ width: `100%`, height: `100%` }}
          source={{
            uri: url,
          }}
        />
      </View>
    </View>
  );
};
