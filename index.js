/**
 * @format
 */

import {AppRegistry} from 'react-native';
import AppStack from './src/navigation/AppStack';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';
import { Settings} from 'react-native-fbsdk-next';
Settings.setAppID('701919164416993');
AppRegistry.registerComponent(appName, () => AppStack);
