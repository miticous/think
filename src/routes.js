/* eslint-disable react/prop-types */
import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator,
} from 'react-navigation';
import React from 'react';
import Home from './views/Home';
import { Profile, ProfileEdit } from './views/Profile';
import Icon from './assets/theme/components/Icon';
import { constants } from './assets/theme/styles/app';

const ProfileStack = createStackNavigator(
  {
    Profile: { screen: Profile },
    ProfileEdit: { screen: ProfileEdit },
  },
  { mode: `modal` },
);

const ProfileMainStack = createStackNavigator(
  {
    Profile: { screen: ProfileStack },
  },
  { headerMode: `none` },
);

const TabNavigator = createBottomTabNavigator(
  {
    Home,
    Profile: ProfileMainStack,
  },
  {
    tabBarOptions: {
      showLabel: false,
    },
    defaultNavigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state;
      const { activeItemColor, inactiveItemColor } = constants;
      return {
        tabBarIcon: ({ focused }) => (
          <Icon name={`${routeName}Icon`} fill={focused ? activeItemColor : inactiveItemColor} />
        ),
      };
    },
  },
);

const AppStackNavigator = createStackNavigator(
  {
    TabNavigator,
  },
  { headerMode: `none` },
);

const AppSwitchNavigator = createSwitchNavigator({
  Main: AppStackNavigator,
});

const AppContainer = createAppContainer(AppSwitchNavigator);

AppContainer.defaultProps = {
  focused: false,
};

export default AppContainer;
