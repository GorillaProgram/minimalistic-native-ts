package com.framework.manager;

import android.content.Context;
import android.view.View;

import com.facebook.react.bridge.UiThreadUtil;
import com.framework.pages.widget.dialog.functional.IDCardDialog;

/**
 * package: com.framework.manager
 * author: MeePwn
 * email: maybewaityou@gmail.com
 * github: https://github.com/maybewaityou
 * date: 2017/2/15 上午9:54
 * desc:
 */

public class FunctionalDialogManager {

    private static Context mContext;

    private static IDCardDialog mIDCardDialog;

    public static void init(Context context) {
        mContext = context;

        mIDCardDialog = new IDCardDialog.Builder(context).build();
    }

    public static void showIDCardDialog(String positiveButtonText, View.OnClickListener positiveListener, String negativeButtonText, View.OnClickListener negativeListener) {
        UiThreadUtil.runOnUiThread(() -> {
            mIDCardDialog
                    .setCouldCancelable(false)
                    .setupButtonsAttrs(positiveButtonText, positiveListener, negativeButtonText, negativeListener, null, null)
                    .show();
        });
    }

    public static void showIDCardDialog(String positiveButtonText, View.OnClickListener positiveListener, String negativeButtonText, View.OnClickListener negativeListener, String otherButtonText, View.OnClickListener otherListener) {
        UiThreadUtil.runOnUiThread(() -> {
            mIDCardDialog
                    .setCouldCancelable(false)
                    .setupButtonsAttrs(positiveButtonText, positiveListener, negativeButtonText, negativeListener, otherButtonText, otherListener)
                    .show();
        });
    }

    /**
     * 关闭 ProgressBar
     */
    public static void dismissIDCardDialog() {
        UiThreadUtil.runOnUiThread(() -> mIDCardDialog.dismiss());
    }

}
