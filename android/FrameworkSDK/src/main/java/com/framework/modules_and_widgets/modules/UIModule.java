package com.framework.modules_and_widgets.modules;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.framework.manager.FunctionalDialogManager;
import com.framework.manager.InfoDialogManager;
import com.framework.manager.ProgressBarDialogManager;

/**
 * package: com.framework.modules_and_widgets.modules
 * author: MeePwn
 * email: maybewaityou@gmail.com
 * github: https://github.com/maybewaityou
 * date: 2017/1/18 上午11:50
 * desc:
 */

public class UIModule extends ReactContextBaseJavaModule {

    public UIModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "UIModule";
    }

    @ReactMethod
    public void showLoading() {
        ProgressBarDialogManager.showProgressBar();
    }

    @ReactMethod
    public void showLoadingWithMessage(String message) {
        ProgressBarDialogManager.showProgressBar(message);
    }

    @ReactMethod
    public void showLoadingWithCancelable(boolean couldCancelable) {
        ProgressBarDialogManager.showProgressBar(couldCancelable);
    }

    @ReactMethod
    public void showLoadingWithMessageAndCancelable(String message, boolean couldCancelable) {
        ProgressBarDialogManager.showProgressBar(message, couldCancelable);
    }

    @ReactMethod
    public void dismissLoading() {
        ProgressBarDialogManager.dismissProgressBar();
    }

    @ReactMethod
    public void showSuccessWithActions(String message, Callback positiveAction, Callback negativeAction) {
        InfoDialogManager.showSuccess(message, v -> {
            positiveAction.invoke();
            InfoDialogManager.dismissSuccess();
        }, v -> {
            negativeAction.invoke();
            InfoDialogManager.dismissSuccess();
        });
    }

    @ReactMethod
    public void showSuccessWithAction(String message, Callback positiveAction) {
        InfoDialogManager.showSuccess(message, v -> {
            positiveAction.invoke();
            InfoDialogManager.dismissSuccess();
        }, null);
    }

    @ReactMethod
    public void dismissSuccess() {
        InfoDialogManager.dismissSuccess();
    }

    @ReactMethod
    public void showMessageWithActions(String message, Callback positiveAction, Callback negativeAction) {
        InfoDialogManager.showMessage(message, v -> {
            positiveAction.invoke();
            InfoDialogManager.dismissMessage();
        }, v -> {
            negativeAction.invoke();
            InfoDialogManager.dismissMessage();
        });
    }

    @ReactMethod
    public void showMessageWithAction(String message, Callback positiveAction) {
        InfoDialogManager.showMessage(message, v -> {
            positiveAction.invoke();
            InfoDialogManager.dismissMessage();
        }, null);
    }

    @ReactMethod
    public void dismissMessage() {
        InfoDialogManager.dismissMessage();
    }

    @ReactMethod
    public void showFailureWithActions(String message, Callback positiveAction, Callback negativeAction) {
        InfoDialogManager.showFailure(message, v -> {
            positiveAction.invoke();
            InfoDialogManager.dismissFailure();
        }, v -> {
            negativeAction.invoke();
            InfoDialogManager.dismissFailure();
        });
    }

    @ReactMethod
    public void showFailureWithAction(String message, Callback positiveAction) {
        InfoDialogManager.showFailure(message, v -> {
            positiveAction.invoke();
            InfoDialogManager.dismissFailure();
        }, null);
    }

    @ReactMethod
    public void dismissFailure() {
        InfoDialogManager.dismissFailure();
    }

    @ReactMethod
    public void showIDCardDialog(String positiveButtonText, String negativeButtonText, Callback positiveAction, Callback negativeAction) {
        FunctionalDialogManager.showIDCardDialog(positiveButtonText, v -> {
            positiveAction.invoke();
            FunctionalDialogManager.dismissIDCardDialog();
        }, negativeButtonText, v -> {
            negativeAction.invoke();
            FunctionalDialogManager.dismissIDCardDialog();
        });
    }

    @ReactMethod
    public void dismissIDCardDialog() {
        FunctionalDialogManager.dismissIDCardDialog();
    }

}
