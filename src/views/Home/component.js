import React from 'react';
import { Text, View } from 'react-native';
import styles from '../../assets/theme/styles/app';

const HomeComponent = () => (
  <View style={styles.centeredItemsContainer}>
    <Text>{`Lets Code { }`}</Text>
  </View>
);

HomeComponent.propTypes = {};

export default HomeComponent;
