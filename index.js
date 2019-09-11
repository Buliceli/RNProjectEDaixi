/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {createAppContainer} from 'react-navigation'
import {name as appName} from './app.json';

const AppStackNavigatorContainer = createAppContainer(App);
AppRegistry.registerComponent(appName, () => AppStackNavigatorContainer);
