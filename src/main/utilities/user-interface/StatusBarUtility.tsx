/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import { Platform } from 'react-native';
import StatusBarModule from '../../native-modules/StatusBarModule';

// StatusBarModule.setHexColor('#AB1223');
/*Supported formats are: #RRGGBB #AARRGGBB or :
'red', 'blue', 'green', 'black', 'white', 'gray', 'cyan', 'magenta', 'yellow',
'lightgray', 'darkgray', 'grey', 'lightgrey', 'darkgrey', 'aqua',
'fuchsia', 'lime', 'maroon', 'navy', 'olive', 'purple', 'silver', 'teal'.*/

const StatusBarUtility = {

    hideStatusBar() {
        if (Platform.OS === 'android') {
            StatusBarModule.hideStatusBar();
        }
    },
    showStatusBar() {
        if (Platform.OS === 'android') {
            StatusBarModule.showStatusBar();
        }
    },
    setHexColor(hexColor: string) {
        if (Platform.OS === 'android') {
            StatusBarModule.setHexColor(hexColor);
        }
    }

};

export default StatusBarUtility;
