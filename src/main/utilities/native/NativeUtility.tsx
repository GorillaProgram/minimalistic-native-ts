/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import JumpToNativeModule from '../../native-modules/JumpToNativeModule';
import LocationModule from '../../native-modules/LocationModule';

const NativeUtility = {

    toActivity(activityName: string, params: string) {
        JumpToNativeModule.toActivity(activityName, params);
    },

    toActivityForResult(activityName: string, params: string, requestCode: number) {
        return new Promise((resolve: any, reject: any) => {
            JumpToNativeModule.toActivityForResult(activityName, params, requestCode, (response: any) => {
                resolve(response);
            }, (error: any) => {
                reject(error);
            });
        });
    },

    openCamera(params: string, requestCode: number) {
        return new Promise((resolve: any, reject: any) => {
            JumpToNativeModule.openCamera(params, requestCode, (response: any) => {
                resolve(response);
            }, (error: any) => {
                reject(error);
            });
        });
    },

    fetchLocationInfo() {
        return new Promise((resolve: any, reject: any) => {
            LocationModule.fetchLocationInfo((response: any) => {
                // 61 ： GPS定位结果，GPS定位成功。
                // 66 ： 离线定位结果。通过requestOfflineLocaiton调用时对应的返回结果。
                // 161： 网络定位结果，网络定位成功。
                if (response.resultCode === '61' || response.resultCode === '161' || response.resultCode === '66') {
                    resolve(response);
                } else {
                    reject(response);
                }
            });
        });
    }

};

export default NativeUtility;
