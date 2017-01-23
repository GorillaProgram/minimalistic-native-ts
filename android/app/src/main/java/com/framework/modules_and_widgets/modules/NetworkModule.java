package com.framework.modules_and_widgets.modules;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.framework.application.JobApplication;
import com.framework.constant.Constant;
import com.framework.vendors.http.events.NetworkEvent;
import com.framework.vendors.http.jobs.NetworkJob;

import org.greenrobot.eventbus.EventBus;
import org.greenrobot.eventbus.Subscribe;
import org.greenrobot.eventbus.ThreadMode;

import java.util.HashMap;
import java.util.Map;

/**
 * package: com.framework.modules_and_widgets.modules
 * author: MeePwn
 * email: maybewaityou@gmail.com
 * github: https://github.com/maybewaityou
 * date: 2017/1/16 下午6:37
 * desc:
 */

public class NetworkModule extends ReactContextBaseJavaModule {

    private Map<String, Callback> mSuccessCallbackMap;
    private Map<String, Callback> mFailureCallbackMap;

    public NetworkModule(ReactApplicationContext reactContext) {
        super(reactContext);
        mSuccessCallbackMap = new HashMap<>();
        mFailureCallbackMap = new HashMap<>();
        EventBus.getDefault().register(this);
    }

    @Override
    public String getName() {
        return "NetworkModule";
    }

    @ReactMethod
    public void addNetworkJob(String url, String paramsString, final Callback successCallback, final Callback failureCallback) {
        mSuccessCallbackMap.put(url, successCallback);
        mFailureCallbackMap.put(url, failureCallback);
        JobApplication.getInstance()
                .getJobManager()
                .addJobInBackground(new NetworkJob(url, paramsString));
    }

    @Subscribe(threadMode = ThreadMode.MAIN)
    public void onMessageEvent(NetworkEvent event) {
        if (Constant.RESPONSE_SUCCESS.equals(event.getResponseType())) {
            Callback callback = mSuccessCallbackMap.get(event.getUrl());
            callback.invoke(event.getResponse());
        } else if (Constant.RESPONSE_FAILURE.equals(event.getResponseType())) {
            Callback callback = mFailureCallbackMap.get(event.getUrl());
            callback.invoke(event.getError());
        }
    }

}
