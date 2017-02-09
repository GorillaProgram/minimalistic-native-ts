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

    /**
     * 显示 ProgressBar
     */
    public static void showProgressBar() {
        UiThreadUtil.runOnUiThread(() -> mProgressBarDialog.show());
    }

    /**
     * 显示 ProgressBar (带文字)
     */
    public static void showProgressBar(String message) {
        UiThreadUtil.runOnUiThread(() -> mProgressBarDialog
                .setMessage(message)
                .show());
    }

    /**
     * 显示 ProgressBar (点击不会消失)
     */
    public static void showProgressBar(boolean couldCancelable) {
        UiThreadUtil.runOnUiThread(() -> mProgressBarDialog
                .setCouldCancelable(couldCancelable)
                .show());
    }

    /**
     * 显示 ProgressBar (带文字, 点击不会消失)
     */
    public static void showProgressBar(boolean couldCancelable, String message) {
        UiThreadUtil.runOnUiThread(() -> mProgressBarDialog
                .setCouldCancelable(couldCancelable)
                .setMessage(message)
                .show());
    }

    /**
     * 关闭 ProgressBar
     */
    public static void dismissProgressBar() {
        UiThreadUtil.runOnUiThread(() -> mProgressBarDialog.dismiss());
    }

}
