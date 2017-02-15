package com.framework.pages.widget.dialog.functional;

import android.app.Dialog;
import android.content.Context;
import android.view.Gravity;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.view.Window;
import android.view.WindowManager;
import android.widget.Button;
import android.widget.TextView;

import com.framework.R;
import com.framework.constant.Constant;

/**
 * package: com.framework.pages.widget.dialog.functional
 * author: MeePwn
 * email: maybewaityou@gmail.com
 * github: https://github.com/maybewaityou
 * date: 2017/2/15 上午9:39
 * desc:
 */

public class IDCardDialog extends Dialog {

    public IDCardDialog(Context context) {
        super(context);
    }

    public IDCardDialog(Context context, int theme) {
        super(context, theme);
    }

    public IDCardDialog setupButtonsAttrs(String positiveButtonText, View.OnClickListener positiveListener, String negativeButtonText, View.OnClickListener negativeListener, String otherButtonText, View.OnClickListener otherListener) {
        Button firstButton = (Button) this.findViewById(R.id.first_button);
        Button secondButton = (Button) this.findViewById(R.id.second_button);
        Button thirdButton = (Button) this.findViewById(R.id.third_button);
        thirdButton.setText(positiveButtonText);
        thirdButton.setOnClickListener(positiveListener);
        secondButton.setText(negativeButtonText);
        secondButton.setOnClickListener(negativeListener);
        if (otherListener == null) {
            firstButton.setVisibility(View.GONE);
        } else {
            firstButton.setVisibility(View.VISIBLE);
            firstButton.setText(otherButtonText);
            firstButton.setOnClickListener(otherListener);
        }
        return this;
    }

    public IDCardDialog setCouldCancelable(boolean couldCancelable) {
        this.setCancelable(couldCancelable);
        return this;
    }

    public static class Builder {

        private Context context;

        public Builder(Context context) {
            this.context = context;
        }

        public IDCardDialog build() {
            LayoutInflater inflater = (LayoutInflater) context.getSystemService(Context.LAYOUT_INFLATER_SERVICE);
            final IDCardDialog dialog = new IDCardDialog(context, R.style.Dialog);
            View layout = inflater.inflate(R.layout.dialog_id_card_view, null, false);
            TextView titleTextView = (TextView) layout.findViewById(R.id.dialog_title);
            titleTextView.setText(R.string.dialog_message_title);

            dialog.addContentView(layout, new ViewGroup.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.WRAP_CONTENT));
            dialog.setContentView(layout);

            Window dialogWindow = dialog.getWindow();
            WindowManager.LayoutParams layoutParams = dialogWindow.getAttributes();
            dialogWindow.setGravity(Gravity.CENTER);
            layoutParams.width = Constant.INFO_DIALOG_WIDTH; // 宽度
            layoutParams.height = Constant.INFO_DIALOG_HEIGHT; // 高度
            dialogWindow.setAttributes(layoutParams);

            return dialog;
        }

    }

}
