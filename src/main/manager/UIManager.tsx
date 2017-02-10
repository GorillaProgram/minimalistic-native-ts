/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import UIModule from '../native-modules/UIModule';
import SplashScreenModule from '../native-modules/SplashScreenModule';
import StatusBarUtility from '../utilities/user-interface/StatusBarUtility';
import PickerViewUtility from '../utilities/user-interface/PickerViewUtility';


const UIManager = Object.assign({}, UIModule, SplashScreenModule, PickerViewUtility, StatusBarUtility);

export default UIManager;
