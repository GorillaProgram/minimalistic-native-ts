package com.framework.utilities;

import android.content.Context;

import com.facebook.drawee.backends.pipeline.Fresco;
import com.facebook.imagepipeline.backends.okhttp3.OkHttpImagePipelineConfigFactory;

import okhttp3.OkHttpClient;

/**
 * package: com.framework.utilities
 * author: MeePwn
 * email: maybewaityou@gmail.com
 * github: https://github.com/maybewaityou
 * date: 2017/2/15 下午3:54
 * desc:
 */

public class ImageCacheUtility {

    private static Context mContext;

    public static void init(Context context) {
        mContext = context;

        OkHttpClient okHttpClient = new OkHttpClient.Builder().build();
        Fresco.initialize(context, OkHttpImagePipelineConfigFactory
                .newBuilder(context, okHttpClient)
                .build());
    }

}
