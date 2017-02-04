/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

'use strict';

import { AppRegistry } from 'react-native';
import StatusBarAndroid from 'react-native-android-statusbar';
import App from './build';

/* The following functions do not reflect on versions before 16 */
StatusBarAndroid.hideStatusBar();
// StatusBarAndroid.showStatusBar();

/* The following functions do not reflect on versions before 21 */
// StatusBarAndroid.setRGB(int red, int green, int blue);
// StatusBarAndroid.setARGB(int alpha,int red, int green, int blue);
// StatusBarAndroid.setHexColor('#AB1223');
/*Supported formats are: #RRGGBB #AARRGGBB or :
'red', 'blue', 'green', 'black', 'white', 'gray', 'cyan', 'magenta', 'yellow',
'lightgray', 'darkgray', 'grey', 'lightgrey', 'darkgrey', 'aqua',
'fuchsia', 'lime', 'maroon', 'navy', 'olive', 'purple', 'silver', 'teal'.*/

AppRegistry.registerComponent('MinimalisticNativeTS', () => App);
