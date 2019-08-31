import React from 'react';
import { G, Path } from 'react-native-svg';
// Each nameValuePair can be:
// * Name: <Svg />; or
// * Name: { svg: <Svg />, viewBox: '0 0 50 50' }

export default {
  HomeIcon: {
    svg: (
      <G>
        <Path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        <Path d="M0 0h24v24H0z" fill="none" />
      </G>
    ),
    height: `24`,
    viewBox: `0 0 24 24`,
  },
  ProfileIcon: {
    svg: (
      <G>
        <Path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        <Path d="M0 0h24v24H0z" fill="none" />
      </G>
    ),
    viewBox: `0 0 24 24`,
  },
  Plus: {
    svg: (
      <G>
        <Path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
        <Path d="M0 0h24v24H0z" fill="none" />
      </G>
    ),
    viewBox: `0 0 24 24`,
    width: 24,
    height: 24,
  },
};
