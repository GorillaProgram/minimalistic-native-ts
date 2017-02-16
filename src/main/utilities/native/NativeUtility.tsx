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
                resolve(response);
            });
        });
    }

};

export default NativeUtility;
