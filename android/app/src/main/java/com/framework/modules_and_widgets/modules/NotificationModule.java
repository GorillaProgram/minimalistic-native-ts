package com.framework.modules_and_widgets.modules;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.framework.utilities.NotificationUtility;
import com.minimalisticnativets.R;

/**
 * package: com.framework.modules_and_widgets.modules
 * author: MeePwn
 * email: maybewaityou@gmail.com
 * github: https://github.com/maybewaityou
 * date: 2017/1/16 上午10:20
 * desc:
 */

public class NotificationModule extends ReactContextBaseJavaModule {

    public NotificationModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "NotificationModule";
    }

    /**
     * 弹出消息通知
     */
    @ReactMethod
    public void showNotification(String title, String message, String activityName) {
        try {
            NotificationUtility.showNotification(R.mipmap.ic_launcher, title, message, Class.forName(activityName));
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
    }

}
