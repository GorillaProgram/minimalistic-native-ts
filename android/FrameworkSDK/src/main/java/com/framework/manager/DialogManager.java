package com.framework.manager;

import android.content.Context;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.UiThreadUtil;
import com.framework.pages.widget.FailureDialog;
import com.framework.pages.widget.MessageDialog;
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
    private static FailureDialog mFailureDialog;
    private static MessageDialog mMessageDialog;

    public static void init(Context context) {
        mContext = context;

        mSuccessDialog = new SuccessDialog.Builder(mContext).build();
        mFailureDialog = new FailureDialog.Builder(mContext).build();
        mMessageDialog = new MessageDialog.Builder(mContext).build();
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
                mMessageDialog.setMessage(message).setOnClickListener(v -> {
                    positiveAction.invoke("");
                    mMessageDialog.dismiss();
                }, null).show();
            } else {
                mMessageDialog.setMessage(message).setOnClickListener(v -> {
                    positiveAction.invoke("");
                    mMessageDialog.dismiss();
                }, v -> {
                    negativeAction.invoke("");
                    mMessageDialog.dismiss();
                }).show();
            }
        });
    }

    public static void dismissMessage() {
        UiThreadUtil.runOnUiThread(() -> {
            mMessageDialog.dismiss();
        });
    }

    public static void showFailure(String message, Callback positiveAction, Callback negativeAction) {
        UiThreadUtil.runOnUiThread(() -> {
            if (negativeAction == null) {
                mFailureDialog.setMessage(message).setOnClickListener(v -> {
                    positiveAction.invoke("");
                    mFailureDialog.dismiss();
                }, null).show();
            } else {
                mFailureDialog.setMessage(message).setOnClickListener(v -> {
                    positiveAction.invoke("");
                    mFailureDialog.dismiss();
                }, v -> {
                    negativeAction.invoke("");
                    mFailureDialog.dismiss();
                }).show();
            }
        });
    }

    public static void dismissFailure() {
        UiThreadUtil.runOnUiThread(() -> {
            mFailureDialog.dismiss();
        });
    }

}
