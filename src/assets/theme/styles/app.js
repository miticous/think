import { StyleSheet, Dimensions } from 'react-native';

export const constants = {
  activeItemColor: `#000000`,
  inactiveItemColor: `#dddddd`,
  footerTabBarIconsSize: 40,
  SCREEN_WIDTH: Dimensions.get(`screen`).width,
  SCREEN_HEIGHT: Dimensions.get(`screen`).height,
  primary: `#dddddd`,
  lowerTextSize: 12,
  lowTextSize: 14,
  mediumTextSize: 16,
  highTextSize: 20,
  highestTextSize: 24,
};

export default StyleSheet.create({
  containerFluid: {
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  defaultViewBox: {
    marginTop: 15,
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
  defaultButtonBox: {
    borderColor: constants.primary,
    borderWidth: 1,
    borderRadius: 4,
  },
  defaultButtonTextBox: {
    paddingVertical: 5,
  },
  profileInteractionsCount: {
    fontSize: constants.highTextSize,
    fontWeight: `bold`,
  },
  mediumBoldText: {
    fontWeight: `500`,
  },
  mediumDefaultText: {
    fontWeight: `300`,
  },
  tabBar: {
    backgroundColor: `#fff`,
    justifyContent: `center`,
    height: 45,
    borderTopWidth: 0.5,
    borderTopColor: constants.primary,
  },
});
