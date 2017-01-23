package com.framework.application;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.framework.modules_and_widgets.register.RegisterPackages;
import com.minimalisticnativets.BuildConfig;

import java.util.Arrays;
import java.util.List;

/**
 * package: com.framework.application
 * author: MeePwn
 * email: maybewaityou@gmail.com
 * github: https://github.com/maybewaityou
 * date: 2017/1/20 上午8:35
 * desc:
 */

public abstract class RNApplication extends Application implements ReactApplication {

    /* React Native 相关 start */
    private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {

        @Override
        protected boolean getUseDeveloperSupport() {
            return BuildConfig.DEBUG;
        }

        @Override
        protected List<ReactPackage> getPackages() {
            return Arrays.asList(
                    new MainReactPackage(),
                    new RegisterPackages()
            );
        }
    };

    @Override
    public ReactNativeHost getReactNativeHost() {
        return mReactNativeHost;
    }
    /* React Native 相关 end */

    @Override
    public void onCreate() {
        super.onCreate();

        initialize();
    }

    private void initialize() {
        initReact();
    }

    /**
     * 初始化React Native相关
     */
    private void initReact() {
        SoLoader.init(this, /* native exopackage */ false);
    }
}
