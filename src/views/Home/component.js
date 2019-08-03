import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { PropTypes } from 'prop-types';
import styles from '../../assets/theme/styles/container';

// eslint-disable-next-line react/prop-types
const HomeComponent = ({ message, personActions: { setMessage } }) => (
  <View style={styles.centeredItemsContainer}>
    <TouchableOpacity onPress={() => setMessage(`LETS CODE { }`)}>
      <Text>{`${message}`}</Text>
    </TouchableOpacity>
  </View>
);

HomeComponent.propTypes = {
  message: PropTypes.string.isRequired,
  setMessage: PropTypes.func.isRequired,
  personActions: PropTypes.shape({}).isRequired,
};

export default HomeComponent;
