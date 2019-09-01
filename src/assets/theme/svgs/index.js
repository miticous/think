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
  Grid: {
    svg: (
      <G>
        <Path d="M0 0h24v24H0z" fill="none" />
        <Path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 20H4v-4h4v4zm0-6H4v-4h4v4zm0-6H4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4z" />
      </G>
    ),
    width: 24,
    height: 24,
    viewBox: `0 0 24 24`,
  },
  PersonTagged: {
    svg: (
      <G>
        <Path fill="none" d="M0 0h24v24H0V0z" />
        <Path d="M19 2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h4l3 3 3-3h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 16h-4.83l-.59.59L12 20.17l-1.59-1.59-.58-.58H5V4h14v14zm-7-7c1.65 0 3-1.35 3-3s-1.35-3-3-3-3 1.35-3 3 1.35 3 3 3zm0-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm6 8.58c0-2.5-3.97-3.58-6-3.58s-6 1.08-6 3.58V17h12v-1.42zM8.48 15c.74-.51 2.23-1 3.52-1s2.78.49 3.52 1H8.48z" />
      </G>
    ),
    width: 24,
    height: 24,
    viewBox: `0 0 24 24`,
  },
};
