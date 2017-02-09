package com.framework.modules_and_widgets.modules;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.framework.utilities.PollingUtility;

/**
 * package: com.framework.modules_and_widgets.modules
 * author: MeePwn
 * email: maybewaityou@gmail.com
 * github: https://github.com/maybewaityou
 * date: 2017/1/16 下午12:21
 * desc:
 */

public class PollingModule extends ReactContextBaseJavaModule {

    public PollingModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "PollingModule";
    }

    @ReactMethod
    public void startPolling(String service, int duration) {
        try {
            PollingUtility.startPollingService(getCurrentActivity(), duration, Class.forName(service), service);
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
    }

    @ReactMethod
    public void stopPolling(String service) {
        try {
            PollingUtility.stopPollingService(getCurrentActivity(), Class.forName(service), service);
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
    }

}
