package com.minimalisticnativets.application;

import com.framework.application.FrameworkApplication;
import com.framework.initialize.DataInitialized;
import com.squareup.leakcanary.LeakCanary;

public class JobApplication extends RNApplication implements DataInitialized {

    private static JobApplication instance;

    public static JobApplication getInstance() {
        return instance;
    }

    @Override
    public void onCreate() {
        super.onCreate();

        initialize();
    }

    @Override
    public void initialize() {

        initData();
        initFrameworkSDK();
        initLeakCanary();
    }

    /**
     * 初始化数据
     */
    private void initData() {
        instance = this;
    }

    /**
     * 初始化FrameworkSDK
     */
    private void initFrameworkSDK() {
        FrameworkApplication.init(this);
    }

    /**
     * 初始化内存泄漏检测工具
     */
    private void initLeakCanary() {
        if (LeakCanary.isInAnalyzerProcess(this)) {
            // This process is dedicated to LeakCanary for heap analysis.
            // You should not init your app in this process.
            return;
        }
        LeakCanary.install(this);
    }

}
