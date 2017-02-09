package com.framework.initialize;

import android.content.Context;

import com.android.volley.RequestQueue;
import com.framework.vendors.http.Volley;

/**
 * package: com.framework.initialize
 * author: MeePwn
 * email: maybewaityou@gmail.com
 * github: https://github.com/maybewaityou
 * date: 2017/2/9 上午11:29
 * desc:
 */

public class FrameworkApplication {

    private static Context mContext;

    private static FrameworkApplication instance;
    public static FrameworkApplication getInstance() {
        return instance;
    }

    public static void init(Context context) {
        mContext = context;
        instance = new FrameworkApplication();
    }

    /* Request Queue 相关 start */
    private volatile RequestQueue requestQueue;
    public synchronized RequestQueue getRequestQueue() {
        if (null == requestQueue) {
            synchronized (RequestQueue.class) {
                if (null == requestQueue) {
                    requestQueue = Volley.newRequestQueue(mContext);
                }
            }
        }
        return requestQueue;
    }
    /* Request Queue 相关 end */

}
