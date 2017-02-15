/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import UIModule from '../../native-modules/UIModule';

const DialogUtility = {

    showIDCardDialogWith2Actions(positiveButtonText: string, positiveAction: () => any, negativeButtonText: string, negativeAction: () => any) {
        UIModule.showIDCardDialogWith2Actions(positiveButtonText, () => {
            positiveAction();
            UIModule.dismissIDCardDialog();
        }, negativeButtonText, () => {
            negativeAction();
            UIModule.dismissIDCardDialog();
        });
    },
    showIDCardDialogWith3Actions(positiveButtonText: string, positiveAction: () => any, negativeButtonText: string, negativeAction: () => any, otherButtonText: string, otherAction: () => any) {
        UIModule.showIDCardDialogWith3Actions(positiveButtonText, () => {
            positiveAction();
            UIModule.dismissIDCardDialog();
        }, negativeButtonText, () => {
            negativeAction();
            UIModule.dismissIDCardDialog();
        }, otherButtonText, () => {
            otherAction();
            UIModule.dismissIDCardDialog();
        });
    }

};

export default DialogUtility;
