package com.framework.pages.widget;

import android.app.Dialog;
import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
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
        TextView textView = (TextView)this.findViewById(R.id.dialog_loading_message);
        if (!"".equals(message) && message != null) {
            textView.setText(message);
            textView.setVisibility(View.VISIBLE);
        } else {
            textView.setVisibility(View.GONE);
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
            View layout = inflater.inflate(R.layout.dialog_loading_view, null, false);

            dialog.addContentView(layout, new ViewGroup.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.WRAP_CONTENT));
            dialog.setContentView(layout);
            return dialog;
        }
    }

}
