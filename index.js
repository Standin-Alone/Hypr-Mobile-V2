/**
 * @format
 */

import {AppRegistry} from 'react-native';
import AppStack from './src/navigation/AppStack';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';
AppRegistry.registerComponent(appName, () => AppStack);
