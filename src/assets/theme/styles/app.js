import { StyleSheet, Dimensions } from 'react-native';

export const constants = {
  activeItemColor: `#000000`,
  inactiveItemColor: `#dddddd`,
  footerTabBarIconsSize: 40,
  SCREEN_WIDTH: Dimensions.get(`screen`).width,
  SCREEN_HEIGHT: Dimensions.get(`screen`).height,
  primary: `#dddddd`,
  lowerTextSize: 12,
  lowTextSize: 16,
  mediumTextSize: 20,
  highTextSize: 24,
  highestTextSize: 26,
};

export default StyleSheet.create({
  containerFluid: {
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  centeredItemsContainer: {
    justifyContent: `center`,
    alignItems: `center`,
  },
  horizontalItemsContainer: {
    flexDirection: `row`,
    justifyContent: `space-between`,
  },
  circledImage: {
    borderRadius: 100,
    width: `90%`,
    height: `90%`,
    overflow: `hidden`,
  },
  circledImageBox: {
    width: `100%`,
    borderRadius: 100,
    height: `100%`,
    borderWidth: 1,
  },
  profileInteractionsCount: {
    fontSize: constants.highTextSize,
    fontWeight: `bold`,
  },
});
