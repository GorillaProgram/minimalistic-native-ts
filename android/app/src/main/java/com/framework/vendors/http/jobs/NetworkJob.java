package com.framework.vendors.http.jobs;

import android.support.annotation.NonNull;
import android.support.annotation.Nullable;

import com.birbit.android.jobqueue.Job;
import com.birbit.android.jobqueue.Params;
import com.birbit.android.jobqueue.RetryConstraint;
import com.framework.constant.Constant;
import com.framework.utilities.NetworkUtility;
import com.framework.vendors.http.events.NetworkEvent;

import org.greenrobot.eventbus.EventBus;

/**
 * package: com.framework.vendors.http.jobs
 * author: MeePwn
 * email: maybewaityou@gmail.com
 * github: https://github.com/maybewaityou
 * date: 2017/1/20 上午10:20
 * desc:
 */

public class NetworkJob extends Job {

    private String mUrl;
    private String mParamsString;

    public NetworkJob(String url, String paramsString) {
        super(new Params(500).requireNetwork().persist().groupBy("network"));
        mUrl = url;
        mParamsString = paramsString;
    }

    @Override
    public void onAdded() {

    }

    @Override
    public void onRun() throws Throwable {
        NetworkUtility.sendRequest(mUrl, mParamsString, response -> {
            EventBus.getDefault().post(new NetworkEvent(mUrl, Constant.RESPONSE_SUCCESS, response));
        }, error -> {
            EventBus.getDefault().post(new NetworkEvent(mUrl, Constant.RESPONSE_FAILURE, error));
        });
    }

    @Override
    protected void onCancel(int cancelReason, @Nullable Throwable throwable) {

    }

    @Override
    protected RetryConstraint shouldReRunOnThrowable(@NonNull Throwable throwable, int runCount, int maxRunCount) {
        // An error occurred in onRun.
        // Return value determines whether this job should retry or cancel. You can further
        // specify a backoff strategy or change the job's priority. You can also apply the
        // delay to the whole group to preserve jobs' running order.
        return RetryConstraint.createExponentialBackoff(runCount, 1000);
    }

}
