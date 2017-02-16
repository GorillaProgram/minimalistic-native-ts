package com.framework.modules_and_widgets.widget;

import android.content.Context;
import android.net.Uri;
import android.support.annotation.Nullable;

import com.facebook.drawee.generic.GenericDraweeHierarchy;
import com.facebook.drawee.generic.GenericDraweeHierarchyBuilder;
import com.facebook.drawee.generic.RoundingParams;
import com.facebook.drawee.view.SimpleDraweeView;
import com.framework.R;

/**
 * package: com.framework.modules_and_widgets.widget
 * author: MeePwn
 * email: maybewaityou@gmail.com
 * github: https://github.com/maybewaityou
 * date: 2017/1/17 下午6:18
 * desc:
 */

public class CacheableImageView extends SimpleDraweeView {

    private Context mContext;
    private RoundingParams mRoundingParams;

    public CacheableImageView(Context context) {
        super(context);

        mContext = context;
        mRoundingParams = new RoundingParams();
    }

    public void setSrc(@Nullable String src) {
        this.setImageURI(Uri.parse(src));
    }

    public void setIsCircle(boolean isCircle) {
        System.out.println("==== isCircle ========" + isCircle);
        GenericDraweeHierarchyBuilder builder = new GenericDraweeHierarchyBuilder(mContext.getResources());
        mRoundingParams.setBorder(R.color.white, 1.0f);
        mRoundingParams.setRoundAsCircle(isCircle);
        GenericDraweeHierarchy hierarchy = builder
                .setFadeDuration(300)
                .setRoundingParams(mRoundingParams)
                .build();
        this.setHierarchy(hierarchy);
    }

}
