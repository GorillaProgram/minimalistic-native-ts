package com.framework.modules_and_widgets.modules;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.LifecycleEventListener;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.framework.constant.Constant;
import com.framework.utilities.NetworkUtility;
import com.framework.utilities.network.connectionclass.ConnectionClassManager;
import com.framework.utilities.network.connectionclass.ConnectionQuality;
import com.framework.utilities.network.connectionclass.DeviceBandwidthSampler;
import com.framework.vendors.http.events.NetworkEvent;
import com.framework.vendors.http.network.NetworkFailureResult;
import com.framework.vendors.http.network.NetworkSuccessResult;

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

    private static ConnectionClassManager mConnectionClassManager;
    private static DeviceBandwidthSampler mDeviceBandwidthSampler;
    private static ConnectionChangedListener mListener;
    private static ConnectionQuality mConnectionClass = ConnectionClassManager.getInstance().getCurrentBandwidthQuality();

    private final LifecycleEventListener mLifecycleEventListener = new LifecycleEventListener() {
        @Override
        public void onHostResume() {
            mConnectionClassManager.register(mListener);
        }

        @Override
        public void onHostPause() {
            mConnectionClassManager.remove(mListener);
        }

        @Override
        public void onHostDestroy() {

        }
    };

    public NetworkModule(ReactApplicationContext reactContext) {
        super(reactContext);
        reactContext.addLifecycleEventListener(mLifecycleEventListener);

        mConnectionClassManager = ConnectionClassManager.getInstance();
        mDeviceBandwidthSampler = DeviceBandwidthSampler.getInstance();
        mListener = new ConnectionChangedListener();

        mSuccessCallbackMap = new HashMap<>();
        mFailureCallbackMap = new HashMap<>();
        EventBus.getDefault().register(this);
    }

    @Override
    public String getName() {
        return "NetworkModule";
    }

    /**
     * Listener to update the UI upon connectionclass change.
     */
    private class ConnectionChangedListener implements ConnectionClassManager.ConnectionClassStateChangeListener {

        @Override
        public void onBandwidthStateChange(ConnectionQuality bandwidthState) {
            mConnectionClass = bandwidthState;
            System.out.println("=== ConnectionQuality ====>>>> " + mConnectionClass);
        }
    }

    @ReactMethod
    public void addNetworkJob(int priority,  String url, String paramsString, final Callback successCallback, final Callback failureCallback) {
        mSuccessCallbackMap.put(url, successCallback);
        mFailureCallbackMap.put(url, failureCallback);
        mDeviceBandwidthSampler.startSampling();
        NetworkUtility.sendRequest(url, paramsString, (NetworkSuccessResult) responseString -> {
            System.out.println("==== responseString  =======>>> " + responseString);
            System.out.println("=== onMessageEvent ConnectionQuality ====>>>> " + mConnectionClass);
            mDeviceBandwidthSampler.stopSampling();
        }, (NetworkFailureResult) error -> {
            System.out.println("==== error =======>>> " + error);
            System.out.println("=== onMessageEvent ConnectionQuality ====>>>> " + mConnectionClass);
            mDeviceBandwidthSampler.stopSampling();
        });
//        JobApplication.getInstance()
//                .getJobManager()
//                .addJobInBackground(new NetworkJob(priority, url, paramsString));
    }

    @Subscribe(threadMode = ThreadMode.MAIN)
    public void onMessageEvent(NetworkEvent event) {
        System.out.println("=== onMessageEvent ConnectionQuality ====>>>> " + mConnectionClass);
        mDeviceBandwidthSampler.stopSampling();
        if (Constant.RESPONSE_SUCCESS.equals(event.getResponseType())) {
            Callback callback = mSuccessCallbackMap.get(event.getUrl());
            callback.invoke(event.getResponse());
        } else if (Constant.RESPONSE_FAILURE.equals(event.getResponseType())) {
            Callback callback = mFailureCallbackMap.get(event.getUrl());
            callback.invoke(event.getError().toString());
        }
    }

    @ReactMethod
    public void isNetworkConnected(Callback callback) {
        callback.invoke(NetworkUtility.isNetworkConnected());
    }

    @ReactMethod
    public void isWifiEnabled(Callback callback) {
        callback.invoke(NetworkUtility.isWifiEnabled());
    }

    @ReactMethod
    public void isWifi(Callback callback) {
        callback.invoke(NetworkUtility.isWifi());
    }

    @ReactMethod
    public void is3G(Callback callback) {
        callback.invoke(NetworkUtility.is3G());
    }

}
