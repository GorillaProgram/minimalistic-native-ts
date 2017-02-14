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
    public void showLoading(String message, boolean couldCancelable) {
        ProgressBarDialogManager.showProgressBar(message, couldCancelable);
    }

    @ReactMethod
    public void dismissLoading() {
        ProgressBarDialogManager.dismissProgressBar();
    }

    @ReactMethod
    public void showSuccess(String message, Callback positiveAction, Callback negativeAction) {
        DialogManager.showSuccess(message, positiveAction, negativeAction);
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
    public void dismissMessage() {
        DialogManager.dismissMessage();
    }

    @ReactMethod
    public void showFailure(String message, Callback positiveAction, Callback negativeAction) {
        DialogManager.showFailure(message, positiveAction, negativeAction);
    }

    @ReactMethod
    public void dismissFailure() {
        DialogManager.dismissFailure();
    }

}
