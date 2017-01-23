/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 */
import CordovaUtility from '../function/CordovaUtility';

const MayUtility = {

    /**
     * 获取当前位置
     */
    currentLocation() {
        return new Promise((resolve, reject) => {
            CordovaUtility.executor('LocationPlugin', 'currentLocation', [], (result) => {
                resolve(result);
            }, (error) => {
                reject(error);
            });
        });
    },
    /**
     * 根据目标地点, 判断当前位置到目标位置的距离是否大于distance
     * 大于distance则不允许做交易
     */
    farAwayFromTargetLocation(targetPosition, radius) {
        return new Promise((resolve, reject) => {
            CordovaUtility.executor('LocationPlugin', 'farAwayFromTargetLocation', [targetPosition.latitude, targetPosition.longitude, radius], (result) => {
                resolve(result);
            }, (error) => {
                reject(error);
            });
        });
    }

};

export default MayUtility;
