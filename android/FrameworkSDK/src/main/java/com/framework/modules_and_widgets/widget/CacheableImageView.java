package com.framework.modules_and_widgets.widget;

import android.content.Context;
import android.net.Uri;
import android.support.annotation.Nullable;

import com.facebook.drawee.view.SimpleDraweeView;
import com.facebook.react.uimanager.annotations.ReactProp;

/**
 * package: com.framework.modules_and_widgets.widget
 * author: MeePwn
 * email: maybewaityou@gmail.com
 * github: https://github.com/maybewaityou
 * date: 2017/1/17 下午6:18
 * desc:
 */

public class CacheableImageView extends SimpleDraweeView {

    public CacheableImageView(Context context) {
        super(context);
    }

    @ReactProp(name = "src", customType="String")
    public void setSrc(SimpleDraweeView view, @Nullable String src) {
        System.out.println("== src ===>>>> " + src);
        view.setImageURI(Uri.parse(src));
    }

}
