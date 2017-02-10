package com.minimalisticnativets.pages;

import android.widget.Toast;

import com.framework.base.UIActivity;
import com.framework.manager.ProgressBarDialogManager;
import com.framework.CalculateUtility;
import com.framework.utilities.SplashScreenUtility;

public class MainActivity extends UIActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "MinimalisticNativeTS";
    }

    @Override
    protected void onResume() {
        super.onResume();

        // 初始化 ProgressBarDialog 管理类
        ProgressBarDialogManager.init(this);
    }

    @Override
    public void setContentView() {
        SplashScreenUtility.show(this);
    }

    @Override
    public void initData() {
        int sum = CalculateUtility.sum(1, 2);
        System.out.println("=== CalculateUtility ===>>>>> " + sum);
        Toast.makeText(this, "=== CalculateUtility ===>>>>> " + sum, Toast.LENGTH_SHORT).show();
    }

    @Override
    public void initViews() {

    }

    @Override
    public void setupViews() {

    }

}
