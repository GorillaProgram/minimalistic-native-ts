package com.framework.modules_and_widgets.widget.manager;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.framework.modules_and_widgets.widget.CacheableImageView;

/**
 * package: com.framework.modules_and_widgets.widget.manager
 * author: MeePwn
 * email: maybewaityou@gmail.com
 * github: https://github.com/maybewaityou
 * date: 2017/1/17 下午6:24
 * desc:
 */

public class CacheableImageViewManager extends SimpleViewManager<CacheableImageView> {

    @Override
    public String getName() {
        return "CacheableImageView";
    }

    @Override
    protected CacheableImageView createViewInstance(ThemedReactContext reactContext) {
        return new CacheableImageView(reactContext);
    }

}
