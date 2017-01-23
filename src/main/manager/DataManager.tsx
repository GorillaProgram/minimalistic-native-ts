/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 */
import DebugUtility from '../utilities/function/DebugUtility';
import DataUtility from '../utilities/data/DataUtility';
import JSONUtility from '../utilities/data/JSONUtility';
import NetworkUtility from '../utilities/data/NetworkUtility';
import StoreUtility from '../utilities/data/StoreUtility';

const DataManager = {

    ...DebugUtility,
    ...DataUtility,
    ...JSONUtility,
    ...NetworkUtility,
    ...StoreUtility

};

export default DataManager;
