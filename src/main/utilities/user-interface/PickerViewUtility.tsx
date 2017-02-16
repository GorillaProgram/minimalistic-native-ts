/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import {
    Platform,
    NativeModules,
    NativeAppEventEmitter
} from 'react-native';

import PickerViewModule from '../../native-modules/PickerViewModule';

let ios = Platform.OS === 'ios';
let android = Platform.OS === 'android';

const PickerViewUtility = {
    initPicker(options: any) {
        let opt = {
            isLoop: false,
            confirmButtonText: 'confirm',
            cancelButtonText: 'cancel',
            titleText: 'title',
            confirmButtonColor: [1, 186, 245, 1],
            cancelButtonColor: [1, 186, 245, 1],
            titleColor: [20, 20, 20, 1],
            toolBarBackground: [232, 232, 232, 1],
            background: [196, 199, 206, 1],
            wheelFlex: [1, 1, 1],
            data: [],
            selectedValue: [],
            onPickerConfirm(){},
            onPickerCancel(){},
            onPickerSelect(){},
            //4.0.12 add
            toolBarFontSize: 16,
            fontSize: 16,
            fontColor: [31, 31 ,31, 1],
            ...options
        };
        let fnConf = {
            confirm: opt.onPickerConfirm,
            cancel: opt.onPickerCancel,
            select: opt.onPickerSelect
        };

        PickerViewModule.initPicker(opt);
        // there are no `removeListener` for NativeAppEventEmitter & DeviceEventEmitter
        this.listener && this.listener.remove();
        this.listener = NativeAppEventEmitter.addListener('pickerEvent', (event: {type: "confirm" | "cancel" | "select", selectedValue: string, selectedIndex: number}) => {
            fnConf[event.type](event.selectedValue, event.selectedIndex);
        });
    },

    showPicker() {
        PickerViewModule.show();
    },

    hidePicker() {
        PickerViewModule.hide();
    },

    select(arr: any[], fn: any) {
        if(ios){
            PickerViewModule.select(arr);
        } else if(android) {
            PickerViewModule.select(arr, (err: any) => {
                typeof fn === 'function' && fn(err);
            });
        }
    },

    toggle() {
        this.isPickerShow((show: any) => {
            if(show) {
                this.hide();
            } else {
                this.show();
            }
        });
    },

    isPickerShow(fn: any) {
        //android return two params: err(error massage) and status(show or not)
        //ios return only one param: hide or not...
        PickerViewModule.isPickerShow((err: any, status: any) => {
            let returnValue = null;
            if(android) {
                returnValue = err ? false : status;
            } else if(ios) {
                returnValue = !err;
            }
            fn(returnValue);
        });
    }
};

export default PickerViewUtility;
