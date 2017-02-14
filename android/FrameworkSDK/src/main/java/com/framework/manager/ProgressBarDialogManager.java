package com.framework.manager;

import android.content.Context;

import com.facebook.react.bridge.UiThreadUtil;
import com.framework.pages.widget.ProgressBarDialog;

/**
 * package: com.framework.pages.widget
 * author: MeePwn
 * email: maybewaityou@gmail.com
 * github: https://github.com/maybewaityou
 * date: 2017/1/19 上午8:30
 * desc:
 */

public class ProgressBarDialogManager {

    private static Context mContext;

    private static ProgressBarDialog mProgressBarDialog;

    public static void init(Context context) {
        mContext = context;

        mProgressBarDialog = new ProgressBarDialog.Builder(context).build();
    }

    public static void showProgressBar() {
        UiThreadUtil.runOnUiThread(() -> {
            mProgressBarDialog.show();
        });
    }

    public static void showProgressBar(String message) {
        UiThreadUtil.runOnUiThread(() -> {
            mProgressBarDialog
                    .setMessage(message)
                    .show();
        });
    }

    public static void showProgressBar(boolean couldCancelable) {
        UiThreadUtil.runOnUiThread(() -> {
            mProgressBarDialog
                    .setCouldCancelable(couldCancelable)
                    .show();
        });
    }

    public static void showProgressBar(String message, boolean couldCancelable) {
        UiThreadUtil.runOnUiThread(() -> {
            mProgressBarDialog
                    .setCouldCancelable(couldCancelable)
                    .setMessage(message)
                    .show();
        });
    }

    /**
     * 关闭 ProgressBar
     */
    public static void dismissProgressBar() {
        UiThreadUtil.runOnUiThread(() -> mProgressBarDialog.dismiss());
    }

}
