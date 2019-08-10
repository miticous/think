import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from '../styles/app';

const ItemLabel = ({ item, boxStyle, labelStyle, labelText, key, onPress }) => (
  <TouchableOpacity activeOpacity={1} onPress={onPress} style={boxStyle} key={key}>
    {item}
    <Text style={labelStyle}>{labelText}</Text>
  </TouchableOpacity>
);

ItemLabel.defaultProps = {
  boxStyle: styles.centeredItemsContainer,
  labelStyle: {
    color: `#999`,
  },
  labelText: ``,
  onPress: () => false,
  key: ``,
};

ItemLabel.propTypes = {
  item: PropTypes.shape({}).isRequired,
  labelStyle: PropTypes.shape({}),
  boxStyle: PropTypes.shape({}),
  labelText: PropTypes.string,
  onPress: PropTypes.func,
  key: PropTypes.string,
};

export default ItemLabel;
