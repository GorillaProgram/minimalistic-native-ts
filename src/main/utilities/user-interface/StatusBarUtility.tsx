/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import { Platform } from 'react-native';
import StatusBarAndroid from 'react-native-android-statusbar';

// StatusBarAndroid.setHexColor('#AB1223');
/*Supported formats are: #RRGGBB #AARRGGBB or :
'red', 'blue', 'green', 'black', 'white', 'gray', 'cyan', 'magenta', 'yellow',
'lightgray', 'darkgray', 'grey', 'lightgrey', 'darkgrey', 'aqua',
'fuchsia', 'lime', 'maroon', 'navy', 'olive', 'purple', 'silver', 'teal'.*/

const StatusBarUtility = {

    hideStatusBar() {
        if (Platform.OS === 'android') {
            StatusBarAndroid.hideStatusBar();
        }
    },
    showStatusBar() {
        if (Platform.OS === 'android') {
            StatusBarAndroid.showStatusBar();
        }
    },
    setHexColor(hexColor: string) {
        if (Platform.OS === 'android') {
            StatusBarAndroid.setHexColor(hexColor);
        }
    }

};

export default StatusBarUtility;
