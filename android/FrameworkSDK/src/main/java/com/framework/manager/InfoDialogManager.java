package com.framework.manager;

import android.content.Context;
import android.view.View;

import com.facebook.react.bridge.UiThreadUtil;
import com.framework.pages.widget.dialog.info.FailureDialog;
import com.framework.pages.widget.dialog.info.MessageDialog;
import com.framework.pages.widget.dialog.info.SuccessDialog;

/**
 * package: com.framework.manager
 * author: MeePwn
 * email: maybewaityou@gmail.com
 * github: https://github.com/maybewaityou
 * date: 2017/1/19 上午8:47
 * desc:
 */

public class InfoDialogManager {

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

    public static void showSuccess(String message, View.OnClickListener positiveListener, View.OnClickListener negativeListener) {
        UiThreadUtil.runOnUiThread(() -> {
            if (negativeListener == null) {
                mSuccessDialog.setMessage(message).setOnClickListener(positiveListener, null).show();
            } else {
                mSuccessDialog.setMessage(message).setOnClickListener(positiveListener, negativeListener).show();
            }
        });
    }

    public static void dismissSuccess() {
        UiThreadUtil.runOnUiThread(() -> {
            mSuccessDialog.dismiss();
        });
    }

    public static void showMessage(String message, View.OnClickListener positiveListener, View.OnClickListener negativeListener) {
        UiThreadUtil.runOnUiThread(() -> {
            if (negativeListener == null) {
                mMessageDialog.setMessage(message).setOnClickListener(positiveListener, null).show();
            } else {
                mMessageDialog.setMessage(message).setOnClickListener(positiveListener, negativeListener).show();
            }
        });
    }

    public static void dismissMessage() {
        UiThreadUtil.runOnUiThread(() -> {
            mMessageDialog.dismiss();
        });
    }

    public static void showFailure(String message, View.OnClickListener positiveListener, View.OnClickListener negativeListener) {
        UiThreadUtil.runOnUiThread(() -> {
            if (negativeListener == null) {
                mFailureDialog.setMessage(message).setOnClickListener(positiveListener, null).show();
            } else {
                mFailureDialog.setMessage(message).setOnClickListener(positiveListener, negativeListener).show();
            }
        });
    }

    public static void dismissFailure() {
        UiThreadUtil.runOnUiThread(() -> {
            mFailureDialog.dismiss();
        });
    }

}
