/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 */
import PeripheralUtility from '../utilities/peripheral/PeripheralUtility';
import DeviceUtility from '../utilities/peripheral/DeviceUtility';
import MapUtility from '../utilities/peripheral/MapUtility';

const PeripheralManager = {

    ...PeripheralUtility,
    ...DeviceUtility,
    ...MapUtility

};

export default PeripheralManager;
