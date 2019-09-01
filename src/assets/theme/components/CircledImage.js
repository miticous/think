// rfsp
import React from 'react';
import { View, ImageBackground } from 'react-native';
import PropTypes from 'prop-types';
import styles from '../styles/app';
import Icon from './Icon';

const CircledImage = ({ url, size, color, iconName }) => {
  const { circledImage, circledImageBox, centeredItemsContainer } = styles;
  return (
    <View
      style={[
        circledImageBox,
        centeredItemsContainer,
        { width: size, height: size, borderColor: color },
      ]}
    >
      {url ? (
        <View style={circledImage}>
          <ImageBackground
            style={{ width: `100%`, height: `100%` }}
            source={{
              uri: url,
            }}
          />
        </View>
      ) : (
        false
      )}
      {iconName && <Icon name={iconName} />}
    </View>
  );
};

CircledImage.defaultProps = {
  size: 120,
  color: `#999`,
  iconName: null,
  url: ``,
};

CircledImage.propTypes = {
  url: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
  iconName: PropTypes.string,
};

export default CircledImage;
