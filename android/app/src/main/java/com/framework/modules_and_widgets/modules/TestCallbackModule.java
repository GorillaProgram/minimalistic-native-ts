package com.framework.modules_and_widgets.modules;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

/**
 * package: com.framework.rn_bridge.modules
 * author: MeePwn
 * email: maybewaityou@gmail.com
 * github: https://github.com/maybewaityou
 * date: 2017/1/12 下午3:24
 * desc:
 */

public class TestCallbackModule extends ReactContextBaseJavaModule {

    public TestCallbackModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "TestCallbackModule";
    }

    @ReactMethod
    public void callbackByActionType(String actionType, Callback successCallback, Callback errorCallback) {
        if ("success".equals(actionType)) {
            successCallback.invoke("mu haha~", "success");
        } else if ("error".equals(actionType)) {
            errorCallback.invoke("mu wuwu~", "error");
        }
    }

}
