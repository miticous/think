import { StyleSheet, Dimensions } from 'react-native';

export const constants = {
  activeItemColor: `#000000`,
  inactiveItemColor: `#dddddd`,
  footerTabBarIconsSize: 40,
  SCREEN_WIDTH: Dimensions.get(`screen`).width,
  SCREEN_HEIGHT: Dimensions.get(`screen`).height,
  circledImageBorderColor: `#dddddd`,
};

export default StyleSheet.create({
  centeredItemsContainer: {
    justifyContent: `center`,
    alignItems: `center`,
  },
  circledImage: {
    borderRadius: 100,
    width: 120,
    height: 120,
    overflow: `hidden`,
  },
  circledImageBox: {
    width: 140,
    borderRadius: 100,
    height: 140,
    borderWidth: 1,
    borderColor: constants.circledImageBorderColor,
  },
});
