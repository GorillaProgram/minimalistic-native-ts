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
import DialogUtility from '../utilities/user-interface/DialogUtility';

const UIManager = Object.assign({}, UIModule, SplashScreenModule, PickerViewUtility, StatusBarUtility, DialogUtility);

export default UIManager;
