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
        JumpToNativeModule.toActivity(activityName, params);
    },
    toActivityForResult(activityName: string, params: string, requestCode: number) {
        JumpToNativeModule.toActivityForResult(activityName, params, requestCode);
    }

};

export default NativeUtility;
