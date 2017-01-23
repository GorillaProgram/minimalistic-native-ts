package com.minimalisticnativets.pages;

import com.framework.base.UIActivity;
import com.framework.manager.ProgressBarDialogManager;

public class MainActivity extends UIActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "MinimalisticNativeCljs";
    }

    @Override
    protected void onResume() {
        super.onResume();

        // 初始化 ProgressBarDialog 管理类
        ProgressBarDialogManager.init(this);
    }

    @Override
    public void setContentView() {

    }

    @Override
    public void initData() {

    }

    @Override
    public void initViews() {

    }

    @Override
    public void setupViews() {

    }

}
