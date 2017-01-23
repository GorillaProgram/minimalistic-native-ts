/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 */
const DebugUtility = {

    log(...params) {
        WL.Logger.info(...params);
        // console.log(...params);
    },
    toast(...params) {
        WL.Toast.show(...params);
    }

};

export default DebugUtility;
