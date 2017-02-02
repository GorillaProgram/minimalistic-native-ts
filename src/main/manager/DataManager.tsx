/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import DebugUtility from '../utilities/function/DebugUtility';
import JSONUtility from '../utilities/data/JSONUtility';
import NetworkUtility from '../utilities/data/NetworkUtility';

const DataManager = Object.assign({}, DebugUtility, JSONUtility, NetworkUtility);

export default DataManager;
