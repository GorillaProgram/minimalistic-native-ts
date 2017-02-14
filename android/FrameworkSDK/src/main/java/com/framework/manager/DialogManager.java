package com.framework.manager;

import android.content.Context;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.UiThreadUtil;
import com.framework.pages.widget.SuccessDialog;

/**
 * package: com.framework.manager
 * author: MeePwn
 * email: maybewaityou@gmail.com
 * github: https://github.com/maybewaityou
 * date: 2017/1/19 上午8:47
 * desc:
 */

public class DialogManager {

    /* dialog type start */
    public static String DIALOG_SUCCESS_TYPE = "success";
    public static String DIALOG_FAILURE_TYPE = "failure";
    public static String DIALOG_MESSAGE_TYPE = "message";
    /* dialog type end */

    private static Context mContext;
    private static SuccessDialog mSuccessDialog;

    public static void init(Context context) {
        mContext = context;

        mSuccessDialog = new SuccessDialog.Builder(mContext).build();
    }

    public static void showSuccess(String message, Callback positiveAction, Callback negativeAction) {
        UiThreadUtil.runOnUiThread(() -> {
            if (negativeAction == null) {
                mSuccessDialog.setMessage(message).setOnClickListener(v -> {
                    positiveAction.invoke("");
                    mSuccessDialog.dismiss();
                }, null).show();
            } else {
                mSuccessDialog.setMessage(message).setOnClickListener(v -> {
                    positiveAction.invoke("");
                    mSuccessDialog.dismiss();
                }, v -> {
                    negativeAction.invoke("");
                    mSuccessDialog.dismiss();
                }).show();
            }
        });
    }

    public static void dismissSuccess() {
        UiThreadUtil.runOnUiThread(() -> {
            mSuccessDialog.dismiss();
        });
    }

    public static void showMessage(String message, Callback positiveAction, Callback negativeAction) {
        UiThreadUtil.runOnUiThread(() -> {
            if (negativeAction == null) {

            } else {

            }
        });
    }

    public static void dismissMessage() {
        UiThreadUtil.runOnUiThread(() -> {

        });
    }

    public static void showFailure(String message, Callback positiveAction, Callback negativeAction) {
        UiThreadUtil.runOnUiThread(() -> {
            if (negativeAction == null) {

            } else {

            }
        });
    }

    public static void dismissFailure() {
        UiThreadUtil.runOnUiThread(() -> {

        });
    }

}
