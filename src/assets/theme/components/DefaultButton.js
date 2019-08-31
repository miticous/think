import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from '../styles/app';

const DefaultButton = ({ name, onPress }) => (
  <TouchableOpacity onPress={onPress} activeOpacity={1} style={styles.defaultButtonBox}>
    <View style={[styles.centeredItemsContainer, styles.defaultButtonTextBox]}>
      <Text style={styles.mediumBoldText}>{name}</Text>
    </View>
  </TouchableOpacity>
);

DefaultButton.propTypes = {
  name: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default DefaultButton;
