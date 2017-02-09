package com.framework.modules_and_widgets.modules;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;

/**
 * package: com.framework.modules_and_widgets.modules
 * author: MeePwn
 * email: maybewaityou@gmail.com
 * github: https://github.com/maybewaityou
 * date: 2017/1/22 下午3:44
 * desc:
 */

public class QRCodeModule extends ReactContextBaseJavaModule {

    public QRCodeModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "QRCodeModule";
    }

}
