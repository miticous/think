import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from '../../../assets/theme/styles/app';

const ProfileEditComponent = ({ onPress, message }) => (
  <TouchableOpacity style={styles.centeredItemsContainer} onPress={onPress}>
    <Text>{message}</Text>
  </TouchableOpacity>
);

ProfileEditComponent.propTypes = {
  onPress: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
};

export default ProfileEditComponent;
