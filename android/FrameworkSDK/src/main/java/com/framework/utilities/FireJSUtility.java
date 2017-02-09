package com.framework.utilities;

import android.content.Context;
import android.support.annotation.Nullable;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.framework.initialize.FrameworkApplication;

/**
 * package: com.framework.utilities
 * author: MeePwn
 * email: maybewaityou@gmail.com
 * github: https://github.com/maybewaityou
 * date: 2017/2/4 下午8:58
 * desc:
 */

public class FireJSUtility {

    private static Context mContext;
    private static ReactContext mReactContext;

    public static void init(Context context) {
        mContext = context;
    }

    public static void fire(String eventName, @Nullable WritableMap payload) {
        WritableMap params = Arguments.createMap();
        params.putMap("payload", payload);
        FrameworkApplication.getReactApplicationContext()
                .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit(eventName, params);
    }

}
