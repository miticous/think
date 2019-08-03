import Home from './views/Home/index';
import { createAppContainer, createStackNavigator } from 'react-navigation';

const AppNavigator = createStackNavigator({
  HomeScreen: Home,
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
