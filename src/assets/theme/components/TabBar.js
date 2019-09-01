import React from 'react';
import { TabBar as RNTabBar } from 'react-native-tab-view';
import styles, { constants } from '../styles/app';
import Icon from './Icon';

const TabBar = props => (
  <RNTabBar
    {...props}
    style={styles.tabBar}
    renderIcon={({ route, focused }) => (
      <Icon
        name={route.key === `personal` ? `Grid` : `PersonTagged`}
        fill={focused ? constants.activeItemColor : constants.inactiveItemColor}
        width={24}
        height={24}
      />
    )}
    indicatorStyle={{ backgroundColor: `#000`, height: 0.75 }}
  />
);

export default TabBar;
