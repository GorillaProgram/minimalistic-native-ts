package com.framework.modules_and_widgets.modules;

import android.app.Activity;
import android.content.Intent;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

/**
 * package: com.framework.modules_and_widgets.modules
 * author: MeePwn
 * email: maybewaityou@gmail.com
 * github: https://github.com/maybewaityou
 * date: 2017/1/13 上午11:27
 * desc:
 */

public class TestJumpToNativeModule extends ReactContextBaseJavaModule {

    public TestJumpToNativeModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "TestJumpToNativeModule";
    }

    @ReactMethod
    public void jumpToNative(String activityName, String params) {
        try {
            Activity currentActivity = getCurrentActivity();
            if (currentActivity != null) {
                System.out.println("------>>>> " + params);

                Intent intent = new Intent(currentActivity, Class.forName(activityName));
                intent.putExtra("params", params);
                currentActivity.startActivity(intent);
            }
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
    }

}
