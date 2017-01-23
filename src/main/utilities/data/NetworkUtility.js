/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 */
import Constant from '../../constant/Constant';
import DebugUtility from '../function/DebugUtility';
import JQMUtility from '../userInterface/JQMUtility';
import DataUtility from './DataUtility';
import JSONUtility from './JSONUtility';

const NetworkUtility = {

    parameters(adapter, procedure, parameters, silence) {
        return {
            adapter,
            procedure,
            parameters,
            silence
        };
    },
    silenceTask(adapter, procedure, parameters, silence) {
        DebugUtility.log('==== adapter ====>>>>> ', adapter);
        DebugUtility.log('==== procedure ====>>>>> ', procedure);
        DebugUtility.log('==== parameters ====>>>>> ', parameters);
        return new Promise((resolve, reject) => {
            try {
                WL.Client.invokeProcedure({
                    adapter: adapter,
                    procedure: procedure,
                    parameters: parameters
                }, {
                    timeout: Constant.REQUEST_TIMEOUT,
                    onSuccess: (result) => {
                        if (result.responseJSON.retCode === Constant.RESPONSE_SUCCESS) {
                            if (DataUtility.isNotNull(result.responseJSON.bsadata)) {
                                NetworkUtility.success(result, silence);
                                resolve(result);
                            } else {
                                NetworkUtility.failure('error', silence);
                                reject('error');
                            }
                        } else if(result.responseJSON.retCode === Constant.RESPONSE_FAILURE) {
                            NetworkUtility.failure(result.responseJSON.retMsg, silence);
                            reject(result.responseJSON.retMsg);
                        } else {
                            NetworkUtility.failure('error', silence);
                            reject('error');
                        }
                    },
                    onFailure: (error) => {
                        NetworkUtility.failure(error, silence);
                        reject(error);
                    }
                });
            } catch (error) {
                NetworkUtility.exception(error, silence);
                reject(error);
            }
        });
    },
    promiseTask(adapter, procedure, parameters) {
        JQMUtility.showLoader();
        return NetworkUtility.silenceTask(adapter, procedure, parameters);
    },
    /* 公共回调方法 start */
    success(result, silence) {
        if (DataUtility.isNull(silence)) {
            JQMUtility.hideLoader();
        }
        DebugUtility.log('==== result ====>>>>> ', result);
    },
    failure(error, silence) {
        if (DataUtility.isNull(silence)) {
            JQMUtility.hideLoader();
        }
        DebugUtility.log('==== failure ====>>>>> ', error);
        if (error !== 'error') {
            alert(JSONUtility.jsonToString(error));
        } else {
            alert('网络请求失败');
        }
    },
    exception(error, silence) {
        if (DataUtility.isNull(silence)) {
            JQMUtility.hideLoader();
        }
        alert('系统错误' + JSONUtility.jsonToString(error.message.toString()));
    },
    /* 公共回调方法 end */

};

export default NetworkUtility;
