/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import UIModule from '../../native-modules/UIModule';

const DialogUtility = {

    showIDCardDialogWith2Buttons(positiveButtonText: string, positiveAction: () => any, negativeButtonText: string, negativeAction: () => any) {
        UIModule.showIDCardDialogWith2Actions(positiveButtonText, () => {
            UIModule.dismissIDCardDialog();
            positiveAction();
        }, negativeButtonText, () => {
            UIModule.dismissIDCardDialog();
            negativeAction();
        });
    },
    showIDCardDialogWith3Buttons(positiveButtonText: string, positiveAction: () => any, negativeButtonText: string, negativeAction: () => any, otherButtonText: string, otherAction: () => any) {
        UIModule.showIDCardDialogWith3Actions(positiveButtonText, () => {
            UIModule.dismissIDCardDialog();
            positiveAction();
        }, negativeButtonText, () => {
            UIModule.dismissIDCardDialog();
            negativeAction();
        }, otherButtonText, () => {
            UIModule.dismissIDCardDialog();
            otherAction();
        });
    }

};

export default DialogUtility;
