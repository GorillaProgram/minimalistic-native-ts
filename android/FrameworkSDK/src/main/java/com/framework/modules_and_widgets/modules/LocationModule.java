package com.framework.modules_and_widgets.modules;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.framework.utilities.LocationUtility;

import java.util.Map;

/**
 * package: com.framework.modules_and_widgets.modules
 * author: MeePwn
 * email: maybewaityou@gmail.com
 * github: https://github.com/maybewaityou
 * date: 2017/2/17 上午6:13
 * desc:
 */

public class LocationModule extends ReactContextBaseJavaModule {

    @Override
    public String getName() {
        return "LocationModule";
    }

    public LocationModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @ReactMethod
    public void fetchLocationInfo(Callback callback) {
        Map<String, String> locationInfo = LocationUtility.fetchLocationInfo();
        WritableMap resultMap = Arguments.createMap();
        for (String key: locationInfo.keySet()) {
            resultMap.putString(key, locationInfo.get(key));
        }
        callback.invoke(resultMap);
    }

}
