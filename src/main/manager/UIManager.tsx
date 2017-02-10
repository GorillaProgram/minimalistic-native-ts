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

const UIManager = Object.assign({}, UIModule, SplashScreenModule, StatusBarUtility);

export default UIManager;
