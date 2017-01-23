/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 */
import DataManager from '../manager/DataManager';
import FunctionManager from '../manager/FunctionManager';
import UIManager from '../manager/UIManager';
import PeripheralManager from '../manager/PeripheralManager';
import TaskManager from '../manager/TaskManager';

const Just = {

    ...DataManager,
    ...FunctionManager,
    ...UIManager,
    ...PeripheralManager,
    ...TaskManager,

};

export default Just;
