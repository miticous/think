import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { PropTypes } from 'prop-types';
import styles from '../../../assets/theme/styles/app';

const ProfileComponent = ({ onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.centeredItemsContainer}>
    <Text style={{ backgroundColor: `red`, width: 100, height: 50 }}>Profile Component</Text>
  </TouchableOpacity>
);

ProfileComponent.defaultProps = {
  onPress: () => false,
};

ProfileComponent.propTypes = {
  onPress: PropTypes.func,
};

export default ProfileComponent;
