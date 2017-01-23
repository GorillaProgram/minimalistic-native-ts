/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 */
import Constant from '../../constant/Constant';
import NetworkUtility from '../data/NetworkUtility';
import JSONUtility from '../data/JSONUtility';
import StoreUtility from '../data/StoreUtility';
import CordovaUtility from '../function/CordovaUtility';
import FunctionUtility from '../function/FunctionUtility';

const PeripheralUtility = {

    /**
     * 连接设备
     */
    connectPeripheral() {

        return PeripheralUtility.connectPeripheralExecutor(JSONUtility.jsonToString({
            DeviceBleName: 'SS'
        }));
    },
    /**
     * 拍照
     */
    fetchPhotoByCamera() {
        return new Promise((resolve, reject) => {
            navigator.camera.getPicture((result) => {
                resolve(result);
            }, (error) => {
                reject(error);
            }, {
                quality : 20,                                            // 图片质量【0-100】数字越大质量越大，但是开销时间越长
                destinationType : Camera.DestinationType.DATA_URL        // 以base64字符串返回
            });
        });
    },
    /**
     * 磁条卡
     */
    fetchMagneticStripeCardInfo() {
        return PeripheralUtility.choosePeripheralExecutor('D001')
            .then(() => {
                return PeripheralUtility.readPeripheralExecutor(JSONUtility.jsonToString({
                    ReadTrack: 23,
                    TimeOut: 8
                }));
            })
            .then((result) => {
                var resultData = JSONUtility.stringToJson(result);
                if (resultData.retCode === Constant.SUCCESS_CODE_FROM_PERIPHERAL) {
                    var cardInfo = resultData.data.Track2 + '';
                    var cardNo = cardInfo.split('\'')[0];
                    return FunctionUtility.promise(cardNo);
                }
                return FunctionUtility.promiseError('error');
            }, () => {
                return FunctionUtility.promiseError('error');
            });
    },
    /**
     * 密码键盘
     */
    fetchPasswordKeyboard(cardNo) {
        return PeripheralUtility.choosePeripheralExecutor('D002')
            .then(() => {
                return PeripheralUtility.readPeripheralExecutor(JSONUtility.jsonToString({
                    VoiceID: 0,
                    AccountNum: cardNo,
                    GetKeyMode: 1,
                    TimeOut: 8
                }));
            })
            .then((result) => {
                return FunctionUtility.promise(JSONUtility.stringToJson(result).data.KeyInfo);
            }, () => {
                return FunctionUtility.promiseError('error');
            })
            .then((result) => {
                if (result === 'error') {
                    return FunctionUtility.promiseError('error');
                }
                var bsaTranRequest = JSONUtility.stringToJson(StoreUtility.memoryCache('tranRequest'));
                bsaTranRequest.RQD.firstPassword = result;
                bsaTranRequest.RQD.CARD_NO = cardNo;
                bsaTranRequest.RQD.Key = 'pad.00000001.zpk'; //每台设备都有一个

                return NetworkUtility.silenceTask('padAdapter', 'rePinBlock', [bsaTranRequest], 'silence');
            })
            .then((result) => {
                return FunctionUtility.promise(result.responseJSON.bsadata);
            }, () => {
                return FunctionUtility.promiseError('error');
            });
    },
    /**
     * IC卡
     */
    fetchICCardInfo() {
        return PeripheralUtility.choosePeripheralExecutor('D003')
            .then(() => {
                return PeripheralUtility.readPeripheralExecutor(JSONUtility.jsonToString({
                    ICTagList: 'A',
                    TimeOut: 8
                }));
            })
            .then((result) => {
                var resultData = JSONUtility.stringToJson(result);
                if (resultData.retCode === Constant.SUCCESS_CODE_FROM_PERIPHERAL) {
                    var ICInfo = resultData.data.ICInfo + '';
                    var cardNo = ICInfo.substring(4);
                    return FunctionUtility.promise(cardNo);
                }
                return FunctionUtility.promiseError('error');
            }, () => {
                return FunctionUtility.promiseError('error');
            });
    },
    /**
     * 指纹仪
     */
    fetchFingerPrint() {
        return PeripheralUtility.choosePeripheralExecutor('D005')
            .then(() => {
                return PeripheralUtility.readPeripheralExecutor(JSONUtility.jsonToString({
                    VoiceID: 0,
                    TimeOut: 8
                }));
            }, () => {
                return FunctionUtility.promiseError('error');
            })
            .then((result) => {
                if (result === 'error') {
                    return FunctionUtility.promiseError('error');
                }
                var fingerprint = JSONUtility.stringToJson(result).data.FigInfo;
                return FunctionUtility.promise(fingerprint);
            }, () => {
                return FunctionUtility.promiseError('error');
            });
    },
    /**
     * 身份证(ID卡)
     */
    fetchIDCardInfo() {
        return PeripheralUtility.choosePeripheralExecutor('D007')
            .then(() => {
                return PeripheralUtility.readPeripheralExecutor('');
            }, () => {
                return FunctionUtility.promiseError('error');
            })
            .then((result) => {
                if (result === 'error') {
                    return FunctionUtility.promiseError('error');
                }
                var resultData = JSONUtility.stringToJson(result);
                if (resultData.retCode === Constant.SUCCESS_CODE_FROM_PERIPHERAL) {
                    return FunctionUtility.promise(resultData.data.IDInfo);
                }
                return FunctionUtility.promiseError('error');
            }, () => {
                return FunctionUtility.promiseError('error');
            });
    },
    /**
     * 手写屏(电子签名?)
     */
    writeToPeripheral() {
        return PeripheralUtility.choosePeripheralExecutor('D008')
            .then(() => {
                return PeripheralUtility.readPeripheralExecutor(JSONUtility.jsonToString({
                    TimeOut: 8
                }));
            }, () => {
                return FunctionUtility.promiseError('error');
            })
            .then((result) => {
                // 封装外设获取的值
                var resultData = JSONUtility.stringToJson(result);
                var src = 'data:image/jpeg;base64,' + resultData.data.WRData;
                return FunctionUtility.promise(src);
            }, () => {
                return FunctionUtility.promiseError('error');
            });
    },
    /**
     * 关闭设备
     */
    closePeripheral() {
        return PeripheralUtility.closePeripheralExecutor();
    },
    /* 禁止使用 start */
    connectPeripheralExecutor(connect) {
        return new Promise((resolve, reject) => {
            CordovaUtility.executor('SesPlugin', 'connect', [connect], (result) => {
                resolve(result);
            }, (error) => {
                reject(error);
            });
        });
    },
    closePeripheralExecutor() {
        return new Promise((resolve, reject) => {
            CordovaUtility.executor('SesPlugin', 'close', [], (result) => {
                resolve(result);
            }, (error) => {
                reject(error);
            });
        });
    },
    choosePeripheralExecutor(deviceCode) {
        return new Promise((resolve, reject) => {
            CordovaUtility.executor('SesPlugin', 'choose', [deviceCode], (result) => {
                resolve(result);
            }, (error) => {
                reject(error);
            });
        });
    },
    /**
     * 读设备
     */
    readPeripheralExecutor(readParams) {
        return new Promise((resolve, reject) => {
            CordovaUtility.executor('SesPlugin', 'read', [readParams], (result) => {
                var resultData = JSONUtility.stringToJson(result);
                resolve(resultData);
            }, (error) => {
                reject(error);
            });
        });
    },
    /**
     * 写设备
     */
    writePeripheralExecutor(writeParams) {
        return new Promise((resolve, reject) => {
            CordovaUtility.executor('SesPlugin', 'write', [writeParams], (result) => {
                resolve(result);
            }, (error) => {
                reject(error);
            });
        });
    }
/* 禁止使用 end */

// 设备读取失败的回调
// deviceName一共7种1.ID 身份证 2.JCIC 芯片卡 3.KPD 密码键盘 4.WR 手写屏 5.FIG 指纹仪 6.MCR 磁条卡

};

export default PeripheralUtility;
