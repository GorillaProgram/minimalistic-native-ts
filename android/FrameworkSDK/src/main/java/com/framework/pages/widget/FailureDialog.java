package com.framework.pages.widget;

import android.app.Dialog;
import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.TextView;

import com.framework.R;


/**
 * package: com.framework.pages.widget
 * author: MeePwn
 * email: maybewaityou@gmail.com
 * github: https://github.com/maybewaityou
 * date: 2017/1/19 上午7:11
 * desc:
 */

public class FailureDialog extends Dialog {

    public FailureDialog(Context context) {
        super(context);
    }

    public FailureDialog(Context context, int theme) {
        super(context, theme);
    }

    public FailureDialog setMessage(String message) {
        TextView messageTextView = (TextView) this.findViewById(R.id.dialog_message);
        if (!"".equals(message) && message != null) {
            messageTextView.setText(message);
            messageTextView.setVisibility(View.VISIBLE);
        } else {
            messageTextView.setVisibility(View.GONE);
        }
        return this;
    }

    public FailureDialog setOnClickListener(View.OnClickListener positiveListener, View.OnClickListener negativeListener) {
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

    public FailureDialog setCouldCancelable(boolean couldCancelable) {
        this.setCancelable(couldCancelable);
        return this;
    }

    public static class Builder {

        private Context context;

        public Builder(Context context) {
            this.context = context;
        }

        public FailureDialog build() {
            LayoutInflater inflater = (LayoutInflater) context.getSystemService(Context.LAYOUT_INFLATER_SERVICE);
            final FailureDialog dialog = new FailureDialog(context, R.style.Dialog);
            View layout = inflater.inflate(R.layout.dialog_failure_view, null, false);
            TextView titleTextView = (TextView) layout.findViewById(R.id.dialog_title);
            titleTextView.setText(R.string.dialog_failure_title);

            dialog.addContentView(layout, new ViewGroup.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.WRAP_CONTENT));
            dialog.setContentView(layout);
            return dialog;
        }
    }

}
