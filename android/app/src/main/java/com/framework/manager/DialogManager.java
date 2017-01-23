package com.framework.manager;

import android.content.Context;

import com.facebook.react.bridge.Callback;

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

    public static void init(Context context) {
        mContext = context;
    }

    public void showSuccess(String message, Callback positiveAction) {

    }

    public void showSuccess(String message, Callback positiveAction, Callback negativeAction) {

    }

    public void showMessage(String message, Callback positiveAction) {

    }

    public void showMessage(String message, Callback positiveAction, Callback negativeAction) {

    }

    public void showFailure(String message, Callback positiveAction) {

    }

    public void showFailure(String message, Callback positiveAction, Callback negativeAction) {

    }

}
