package com.framework.pages.activity;

import android.content.Intent;
import android.os.Bundle;
import android.widget.TextView;

import com.framework.R;
import com.framework.base.UIActivity;

/**
 * package: com.framework.pages.activity
 * author: MeePwn
 * email: maybewaityou@gmail.com
 * github: https://github.com/maybewaityou
 * date: 2017/1/13 上午11:31
 * desc:
 */

public class TestActivity extends UIActivity {

    private TextView mTextView;
    private String mParams;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
    }

    @Override
    public void setContentView() {
        setContentView(R.layout.activity_test);
    }

    @Override
    public void initData() {
        mParams = getIntent().getStringExtra("params");
    }

    @Override
    public void initViews() {
        mTextView = (TextView) findViewById(R.id.textView);
        mTextView.setOnClickListener(v -> {
//            Intent intent = new Intent(this, TestFrameworkActivity.class);
//            startActivity(intent);
            Intent intent = new Intent();
            intent.putExtra("response", "mu haha~");
            setResult(RESULT_OK, intent);
            finish();
        });
    }

    @Override
    public void setupViews() {
        mTextView.setText(mParams);
    }

}
