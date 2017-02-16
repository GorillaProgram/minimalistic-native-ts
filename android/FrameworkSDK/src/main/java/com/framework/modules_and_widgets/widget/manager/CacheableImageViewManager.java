package com.framework.modules_and_widgets.widget.manager;

import android.net.Uri;
import android.support.annotation.Nullable;

import com.facebook.drawee.generic.GenericDraweeHierarchy;
import com.facebook.drawee.generic.GenericDraweeHierarchyBuilder;
import com.facebook.drawee.generic.RoundingParams;
import com.facebook.drawee.view.SimpleDraweeView;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.framework.R;

/**
 * package: com.framework.modules_and_widgets.widget.manager
 * author: MeePwn
 * email: maybewaityou@gmail.com
 * github: https://github.com/maybewaityou
 * date: 2017/1/17 下午6:24
 * desc:
 */

public class CacheableImageViewManager extends SimpleViewManager<SimpleDraweeView> {

    @Override
    public String getName() {
        return "CacheableImageView";
    }

    @Override
    protected SimpleDraweeView createViewInstance(ThemedReactContext reactContext) {
        SimpleDraweeView sView = new SimpleDraweeView(reactContext);
        GenericDraweeHierarchyBuilder builder = new GenericDraweeHierarchyBuilder(reactContext.getResources());
        RoundingParams roundingParams = new RoundingParams();
        roundingParams.setBorder(R.color.red, 1.0f);
        roundingParams.setRoundAsCircle(true);
        GenericDraweeHierarchy hierarchy = builder.setFadeDuration(300)
                .setRoundingParams(roundingParams)
                .build();
        sView.setHierarchy(hierarchy);
        return sView;
    }

    @ReactProp(name = "src")
    public void setSrc(SimpleDraweeView view, @Nullable String src) {
        System.out.println("== src ===>>>> " + src);
        view.setImageURI(Uri.parse(src));
    }

}
