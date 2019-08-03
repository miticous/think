import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';
import React from 'react';
import Home from './views/Home';
import Profile from './views/Profile';
import Icon from './assets/theme/components/icon';
import { constants } from './assets/theme/styles/app';

const ProfileStack = createStackNavigator({
  ProfileScreen: Profile,
});

const HomeStack = createStackNavigator({
  HomeScreen: Home,
});

const AppContainer = createAppContainer(
  createBottomTabNavigator(
    {
      HomeTab: {
        screen: HomeStack,
        navigationOptions: {
          tabBarIcon: ({ focused }) => (
            <Icon
              name="HomeIcon"
              width={constants.footerTabBarIconsSize}
              height={constants.footerTabBarIconsSize}
              fill={focused ? constants.activeItemColor : constants.inactiveItemColor}
            />
          ),
        },
      },
      ProfileTab: {
        screen: ProfileStack,
        navigationOptions: {
          tabBarIcon: ({ focused }) => (
            <Icon
              name="PersonIcon"
              width={constants.footerTabBarIconsSize}
              height={constants.footerTabBarIconsSize}
              fill={focused ? constants.activeItemColor : constants.inactiveItemColor}
            />
          ),
        },
      },
    },
    {
      tabBarOptions: {
        showLabel: false,
      },
    },
  ),
);

AppContainer.defaultProps = {
  focused: false,
};

export default AppContainer;
