package com.framework.utilities;

import android.content.Context;
import android.net.ConnectivityManager;
import android.net.NetworkInfo;
import android.telephony.TelephonyManager;

import com.framework.application.JobApplication;
import com.framework.vendors.http.network.NetworkFailureResult;
import com.framework.vendors.http.network.NetworkSuccessResult;
import com.framework.vendors.http.request.JSONRequest;
import com.framework.vendors.log.JLog;
import com.squareup.phrase.Phrase;

import org.json.JSONException;
import org.json.JSONObject;

/**
 * package: com.framework.utilities
 * author: MeePwn
 * email: maybewaityou@gmail.com
 * github: https://github.com/maybewaityou
 * date: 2017/1/17 上午8:46
 * desc:
 */

public class NetworkUtility {

    private static Context mContext;

    public static void init(Context context) {
        mContext = context;
    }

    public static void sendRequest(String url, String paramsString, NetworkSuccessResult successResult, NetworkFailureResult failureResult) {
        try {
            JSONObject params = new JSONObject(paramsString);
            JLog.d(Phrase.from("=== {url} ====>>>>> {params}").put("url", url).put("params", params.toString()).format().toString());
            JobApplication.getInstance()
                    .getRequestQueue()
                    .add(new JSONRequest(url, "{}".equals(params.toString()) ? null : params,
                            response -> {
                                // TODO 组装成功返回数据
                                JLog.d(Phrase.from("=== success === url ====>>>>> {url}").put("url", url).format().toString());
                                JLog.json(Phrase.from("{response}").put("response", response.toString()).format().toString());
                                successResult.onSuccess(response.toString());
                            },
                            error -> {
                                // TODO 组装失败返回数据
                                JLog.d(Phrase.from("=== error === {url} ====>>>>> {error}").put("url", url).put("error", error.toString()).format().toString());
                                failureResult.onFailure(error);
                            }));
        } catch (JSONException e) {
            e.printStackTrace();
        }
    }

    public static boolean isNetworkConnected() {
        if (mContext != null) {
            ConnectivityManager mConnectivityManager = (ConnectivityManager) mContext.getSystemService(Context.CONNECTIVITY_SERVICE);
            NetworkInfo mNetworkInfo = mConnectivityManager.getActiveNetworkInfo();
            if (mNetworkInfo != null) {
                return mNetworkInfo.isAvailable();
            }
        }
        return false;
    }

    public static boolean isWifiEnabled() {
        ConnectivityManager connectivityManager = (ConnectivityManager) mContext.getSystemService(Context.CONNECTIVITY_SERVICE);
        TelephonyManager telephonyManager = (TelephonyManager) mContext.getSystemService(Context.TELEPHONY_SERVICE);
        return ((connectivityManager.getActiveNetworkInfo() != null
                && connectivityManager.getActiveNetworkInfo().getState() == NetworkInfo.State.CONNECTED)
                || telephonyManager.getNetworkType() == TelephonyManager.NETWORK_TYPE_UMTS);
    }

    public static boolean isWifi() {
        ConnectivityManager cm = (ConnectivityManager) mContext.getSystemService(Context.CONNECTIVITY_SERVICE);
        NetworkInfo networkINfo = cm.getActiveNetworkInfo();
        return networkINfo != null && networkINfo.getType() == ConnectivityManager.TYPE_WIFI;
    }

    public static boolean is3G() {
        ConnectivityManager cm = (ConnectivityManager) mContext.getSystemService(Context.CONNECTIVITY_SERVICE);
        NetworkInfo networkINfo = cm.getActiveNetworkInfo();
        return networkINfo != null && networkINfo.getType() == ConnectivityManager.TYPE_MOBILE;
    }

}
