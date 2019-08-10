// rfsp
import React from 'react';
import { View, ImageBackground } from 'react-native';
import PropTypes from 'prop-types';
import styles from '../styles/app';

const CircledImage = ({ url, size, color }) => {
  const { circledImage, circledImageBox, centeredItemsContainer } = styles;
  return (
    <View
      style={[
        circledImageBox,
        centeredItemsContainer,
        { width: size, height: size, borderColor: color },
      ]}
    >
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

CircledImage.defaultProps = {
  size: 120,
  color: `#999`,
};

CircledImage.propTypes = {
  url: PropTypes.string.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
};

export default CircledImage;
