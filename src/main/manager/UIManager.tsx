/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import UIModule from '../native-modules/UIModule';
import StatusBarUtility from '../utilities/user-interface/StatusBarUtility';

const UIManager = Object.assign({}, UIModule, StatusBarUtility);

export default UIManager;
