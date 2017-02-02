/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import NetworkModule from '../../native-modules/NetworkModule';
import DebugUtility from '../function/DebugUtility';
import JSONUtility from './JSONUtility';

const NetworkUtility = {

    addSilenceNetworkJob(url: string, params: any, silence: boolean) {
        const parameters = JSONUtility.toString(params);
        DebugUtility.log('==== url ====>>>>> ', url);
        DebugUtility.log('==== params ====>>>>> ', parameters);
        return new Promise((resolve: any, reject: any) => {
            NetworkModule.addNetworkJob(url, parameters, (response: any) => {
                NetworkUtility.success(response, silence);
                resolve(response);
            }, (error: any) => {
                NetworkUtility.failure(error, silence);
                reject(error);
            });
        });
    },
    addNetworkJob(url: string, params: any) {
        return NetworkUtility.addSilenceNetworkJob(url, params, false);
    },
    /* 公共回调方法 start */
    success(result: any, silence: boolean) {
        DebugUtility.log('==== result ====>>>>> ', result);
    },
    failure(error: any, silence: boolean) {
        DebugUtility.log('==== failure ====>>>>> ', error);
    },
    exception(error: any, silence: boolean) {
        DebugUtility.log('==== exception ====>>>>> ', error.message.toString());
    }
    /* 公共回调方法 end */

};

export default NetworkUtility;
