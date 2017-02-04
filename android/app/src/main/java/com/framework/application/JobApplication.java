package com.framework.application;

import android.util.Log;

import com.android.volley.RequestQueue;
import com.birbit.android.jobqueue.JobManager;
import com.birbit.android.jobqueue.config.Configuration;
import com.birbit.android.jobqueue.log.CustomLogger;
import com.framework.constant.Constant;
import com.framework.initialize.DataInitialized;
import com.framework.utilities.FireJSUtility;
import com.framework.utilities.NetworkUtility;
import com.framework.utilities.NotificationUtility;
import com.framework.vendors.http.Volley;
import com.squareup.leakcanary.LeakCanary;

/**
 * package: com.framework.application
 * author: MeePwn
 * email: maybewaityou@gmail.com
 * github: https://github.com/maybewaityou
 * date: 2017/1/20 上午10:08
 * desc:
 */

public abstract class JobApplication extends RNApplication implements DataInitialized {

    private static JobApplication instance;

    public static JobApplication getInstance() {
        return instance;
    }

    /* Android Priority Job Queue 相关 start */
    private volatile JobManager jobManager;
    public synchronized JobManager getJobManager() {
        if (null == jobManager) {
            synchronized (JobManager.class) {
                if (null == jobManager) {
                    jobManager = configureJobManager();
                }
            }
        }
        return jobManager;
    }

    private JobManager configureJobManager() {
        Configuration.Builder builder = new Configuration.Builder(this)
                .customLogger(new CustomLogger() {

                    @Override
                    public boolean isDebugEnabled() {
                        return true;
                    }

                    @Override
                    public void d(String text, Object... args) {
                        Log.d(Constant.LOG_TAG_JOB_QUEUE, String.format(text, args));
                    }

                    @Override
                    public void e(Throwable t, String text, Object... args) {
                        Log.e(Constant.LOG_TAG_JOB_QUEUE, String.format(text, args), t);
                    }

                    @Override
                    public void e(String text, Object... args) {
                        Log.e(Constant.LOG_TAG_JOB_QUEUE, String.format(text, args));
                    }

                    @Override
                    public void v(String text, Object... args) {
                        Log.v(Constant.LOG_TAG_JOB_QUEUE, String.format(text, args));
                    }
                })
                .minConsumerCount(1)//always keep at least one consumer alive
                .maxConsumerCount(3)//up to 3 consumers at a time
                .loadFactor(3)//3 jobs per consumer
                .consumerKeepAlive(120);//wait 2 minute
        return new JobManager(builder.build());
    }
    /* Android Priority Job Queue 相关 end */

    /* Request Queue 相关 start */
    private volatile RequestQueue requestQueue;
    public synchronized RequestQueue getRequestQueue() {
        if (null == requestQueue) {
            synchronized (RequestQueue.class) {
                if (null == requestQueue) {
                    requestQueue = Volley.newRequestQueue(this);
                }
            }
        }
        return requestQueue;
    }
    /* Request Queue 相关 end */

    @Override
    public void onCreate() {
        super.onCreate();

        initialize();
    }

    @Override
    public void initialize() {

        initData();
        initManagers();
        initUtilities();
        initLeakCanary();
    }

    /**
     * 初始化数据
     */
    private void initData() {
        instance = this;
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

    /**
     * 初始化全局管理类
     */
    private void initManagers() {

    }

    /**
     * 初始化全局工具类
     */
    private void initUtilities() {
        // 初始化 Notification 工具类
        NotificationUtility.init(this);
        // 初始化 Network 工具类
        NetworkUtility.init(this);
        // 初始化 FireJS 工具类
        FireJSUtility.init(this);
    }

}
