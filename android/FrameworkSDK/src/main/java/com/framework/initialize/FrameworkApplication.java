package com.framework.initialize;

import android.content.Context;
import android.util.Log;

import com.android.volley.RequestQueue;
import com.birbit.android.jobqueue.JobManager;
import com.birbit.android.jobqueue.config.Configuration;
import com.birbit.android.jobqueue.log.CustomLogger;
import com.facebook.react.bridge.ReactApplicationContext;
import com.framework.constant.Constant;
import com.framework.vendors.http.Volley;

/**
 * package: com.framework.initialize
 * author: MeePwn
 * email: maybewaityou@gmail.com
 * github: https://github.com/maybewaityou
 * date: 2017/2/9 上午11:29
 * desc:
 */

public class FrameworkApplication {

    private static Context mContext;

    private static FrameworkApplication instance;
    public static FrameworkApplication getInstance() {
        return instance;
    }

    public static void init(Context context) {
        mContext = context;
        instance = new FrameworkApplication();
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
        Configuration.Builder builder = new Configuration.Builder(mContext)
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
                    requestQueue = Volley.newRequestQueue(mContext);
                }
            }
        }
        return requestQueue;
    }
    /* Request Queue 相关 end */

    private static ReactApplicationContext mReactApplicationContext;

    public static ReactApplicationContext getReactApplicationContext() {
        return mReactApplicationContext;
    }

    public static void setReactApplicationContext(ReactApplicationContext reactApplicationContext) {
        mReactApplicationContext = reactApplicationContext;
    }

}
