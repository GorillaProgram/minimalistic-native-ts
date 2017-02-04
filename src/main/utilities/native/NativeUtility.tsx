/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import JumpToNativeModule from '../../native-modules/JumpToNativeModule';

const NativeUtility = {

    toActivity(activityName: string, params: string) {
        JumpToNativeModule.jumpToNative(activityName, params);
    },
    toActivityForResult(activityName: string, params: string, requestCode: number) {
        JumpToNativeModule.jumpToNativeForResult(activityName, params);
    }

};

export default NativeUtility;
