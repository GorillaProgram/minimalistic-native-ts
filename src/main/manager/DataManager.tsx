/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 */
import DataUtility from '../utilities/data/DataUtility';
import JSONUtility from '../utilities/data/JSONUtility';
import NetworkUtility from '../utilities/data/NetworkUtility';
import StoreUtility from '../utilities/data/StoreUtility';

const DataManager = {

    ...DataUtility,
    ...JSONUtility,
    ...NetworkUtility,
    ...StoreUtility

};

export default DataManager;
