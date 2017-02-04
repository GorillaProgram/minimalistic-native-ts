/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import DataManager from '../manager/DataManager';
import NativeManager from '../manager/NativeManager';
import UIManager from '../manager/UIManager';

const Just = Object.assign({}, DataManager, NativeManager, UIManager);

export default Just;
