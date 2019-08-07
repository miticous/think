import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from '../../../assets/theme/styles/app';

const ProfileComponent = ({ onPress, message, onPress2 }) => (
  <>
    <TouchableOpacity onPress={onPress2}>
      <Text>{message}</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={onPress} style={styles.centeredItemsContainer}>
      <Text style={{ backgroundColor: `red`, width: 100, height: 50 }}>Press To Navigate</Text>
    </TouchableOpacity>
  </>
);

ProfileComponent.propTypes = {
  onPress: PropTypes.func.isRequired,
  onPress2: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
};

export default ProfileComponent;
