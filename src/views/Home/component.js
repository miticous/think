import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { PropTypes } from 'prop-types';
import styles from '../../assets/theme/styles/app';

// eslint-disable-next-line react/prop-types
const HomeComponent = ({ message, personActions: { setMessage } }) => (
  <View style={styles.centeredItemsContainer}>
    <TouchableOpacity onPress={() => setMessage(`LETS CODE { }`)}>
      <Text>{`${message}`}</Text>
    </TouchableOpacity>
  </View>
);

HomeComponent.defaultProps = {
  setMessage: () => false,
};

HomeComponent.propTypes = {
  message: PropTypes.string.isRequired,
  setMessage: PropTypes.func,
  personActions: PropTypes.shape({}).isRequired,
};

export default HomeComponent;
