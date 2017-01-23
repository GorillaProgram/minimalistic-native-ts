package com.framework.modules_and_widgets.register;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.JavaScriptModule;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;
import com.framework.modules_and_widgets.modules.DBModule;
import com.framework.modules_and_widgets.modules.NetworkModule;
import com.framework.modules_and_widgets.modules.NotificationModule;
import com.framework.modules_and_widgets.modules.PollingModule;
import com.framework.modules_and_widgets.modules.TestCallbackModule;
import com.framework.modules_and_widgets.modules.TestJumpToNativeModule;
import com.framework.modules_and_widgets.modules.TestToastModule;
import com.framework.modules_and_widgets.modules.UIModule;
import com.framework.modules_and_widgets.widget.manager.CacheableImageViewManager;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

/**
 * package: com.framework.rn_bridge.register
 * author: MeePwn
 * email: maybewaityou@gmail.com
 * github: https://github.com/maybewaityou
 * date: 2017/1/12 上午11:49
 * desc:
 */

public class RegisterPackages implements ReactPackage {

    @Override
    public List<Class<? extends JavaScriptModule>> createJSModules() {
        return Collections.emptyList();
    }

    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        return Arrays.<ViewManager>asList(
                new CacheableImageViewManager()
        );
    }

    @Override
    public List<NativeModule> createNativeModules(
            ReactApplicationContext reactContext) {
        List<NativeModule> modules = new ArrayList<>();

        modules.add(new TestToastModule(reactContext));
        modules.add(new TestCallbackModule(reactContext));
        modules.add(new TestJumpToNativeModule(reactContext));
        modules.add(new UIModule(reactContext));
        modules.add(new PollingModule(reactContext));
        modules.add(new NotificationModule(reactContext));
        modules.add(new NetworkModule(reactContext));
        modules.add(new DBModule(reactContext));

        return modules;
    }

}
