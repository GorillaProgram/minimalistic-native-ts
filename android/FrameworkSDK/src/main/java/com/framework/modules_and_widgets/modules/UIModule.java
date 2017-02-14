package com.framework.modules_and_widgets.modules;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.framework.manager.DialogManager;
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
    public void showSuccess(String message, Callback positiveAction, Callback negativeAction) {
        System.out.println("======= showSuccess ");
        DialogManager.showSuccess(message, positiveAction, negativeAction);
    }

    @ReactMethod
    public void showSuccess1(String message, Callback positiveAction) {
        System.out.println("======= showSuccess 111111 ");
        DialogManager.showSuccess(message, positiveAction, null);
    }

    @ReactMethod
    public void dismissSuccess() {
        DialogManager.dismissSuccess();
    }

    @ReactMethod
    public void showMessage(String message, Callback positiveAction, Callback negativeAction) {
        DialogManager.showMessage(message, positiveAction, negativeAction);
    }

    @ReactMethod
    public void showMessage1(String message, Callback positiveAction) {
        DialogManager.showMessage(message, positiveAction, null);
    }

    @ReactMethod
    public void dismissMessage() {
        DialogManager.dismissMessage();
    }

    @ReactMethod
    public void showFailure(String message, Callback positiveAction, Callback negativeAction) {
        DialogManager.showFailure(message, positiveAction, negativeAction);
    }

    @ReactMethod
    public void showFailure1(String message, Callback positiveAction) {
        DialogManager.showFailure(message, positiveAction, null);
    }

    @ReactMethod
    public void dismissFailure() {
        DialogManager.dismissFailure();
    }

}
