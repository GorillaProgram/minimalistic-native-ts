package com.framework.pages.widget.dialog.info;

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
 * package: com.framework.pages.widget
 * author: MeePwn
 * email: maybewaityou@gmail.com
 * github: https://github.com/maybewaityou
 * date: 2017/1/19 上午7:11
 * desc:
 */

public class SuccessDialog extends Dialog {

    public SuccessDialog(Context context) {
        super(context);
    }

    public SuccessDialog(Context context, int theme) {
        super(context, theme);
    }

    public SuccessDialog setMessage(String message) {
        TextView messageTextView = (TextView) this.findViewById(R.id.dialog_message);
        if (!"".equals(message) && message != null) {
            messageTextView.setText(message);
            messageTextView.setVisibility(View.VISIBLE);
        } else {
            messageTextView.setVisibility(View.GONE);
        }
        return this;
    }

    public SuccessDialog setOnClickListener(View.OnClickListener positiveListener, View.OnClickListener negativeListener) {
        Button firstButton = (Button) this.findViewById(R.id.first_button);
        Button secondButton = (Button) this.findViewById(R.id.second_button);
        Button thirdButton = (Button) this.findViewById(R.id.third_button);
        firstButton.setVisibility(View.GONE);
        thirdButton.setText(R.string.dialog_confirm);
        thirdButton.setOnClickListener(positiveListener);
        if (negativeListener == null) {
            secondButton.setVisibility(View.GONE);
        } else {
            secondButton.setVisibility(View.VISIBLE);
            secondButton.setText(R.string.dialog_cancel);
            secondButton.setOnClickListener(negativeListener);
        }
        return this;
    }

    public SuccessDialog setCouldCancelable(boolean couldCancelable) {
        this.setCancelable(couldCancelable);
        return this;
    }

    public static class Builder {

        private Context context;

        public Builder(Context context) {
            this.context = context;
        }

        public SuccessDialog build() {
            LayoutInflater inflater = (LayoutInflater) context.getSystemService(Context.LAYOUT_INFLATER_SERVICE);
            final SuccessDialog dialog = new SuccessDialog(context, R.style.Dialog);
            View layout = inflater.inflate(R.layout.dialog_success_view, null, false);
            TextView titleTextView = (TextView) layout.findViewById(R.id.dialog_title);
            titleTextView.setText(R.string.dialog_success_title);

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
