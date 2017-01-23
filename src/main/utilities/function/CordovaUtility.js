/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 */
const CordovaUtility = {

    executor(pluginName, action, params, onSuccess, onFailure) {
        cordova.exec(onSuccess, onFailure, pluginName, action, params);
    }

};

export default CordovaUtility;
