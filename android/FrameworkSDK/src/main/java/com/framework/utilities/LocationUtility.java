package com.framework.utilities;

import android.content.Context;
import com.framework.utilities.location.LocationListener;

import com.baidu.location.BDLocation;
import com.baidu.location.BDLocationListener;
import com.baidu.location.Poi;
import com.framework.services.LocationService;
import com.framework.vendors.log.JLog;

import org.json.JSONArray;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * package: com.framework.utilities
 * author: MeePwn
 * email: maybewaityou@gmail.com
 * github: https://github.com/maybewaityou
 * date: 2017/1/22 下午3:32
 * desc:
 */

public class LocationUtility {

    private static Context mContext;
    private static LocationService mLocationService;
    private static LocationCallback mLocationCallback;

    public static void init(Context context) {
        mContext = context;

        mLocationService = new LocationService(context);
        mLocationCallback = new LocationCallback();
    }

    public static void fetchLocationInfo(LocationListener locationListener) {
        mLocationCallback.setLocationListener(locationListener);
        mLocationService.unregisterListener(mLocationCallback);
        mLocationService.registerListener(mLocationCallback);

        mLocationService.start();
    }

    private static class LocationCallback implements BDLocationListener {

        private LocationListener mLocationListener;

        public void setLocationListener(LocationListener locationListener) {
            mLocationListener = locationListener;
        }

        @Override
        public void onReceiveLocation(BDLocation location) {
//            location.getLocType()
//            返回值：
//            61 ： GPS定位结果，GPS定位成功。
//            62 ： 无法获取有效定位依据，定位失败，请检查运营商网络或者WiFi网络是否正常开启，尝试重新请求定位。
//            63 ： 网络异常，没有成功向服务器发起请求，请确认当前测试手机网络是否通畅，尝试重新请求定位。
//            65 ： 定位缓存的结果。
//            66 ： 离线定位结果。通过requestOfflineLocaiton调用时对应的返回结果。
//            67 ： 离线定位失败。通过requestOfflineLocaiton调用时对应的返回结果。
//            68 ： 网络连接失败时，查找本地离线定位时对应的返回结果。
//            161： 网络定位结果，网络定位成功。
//            162： 请求串密文解析失败，一般是由于客户端SO文件加载失败造成，请严格参照开发指南或demo开发，放入对应SO文件。
//            167： 服务端定位失败，请您检查是否禁用获取位置信息权限，尝试重新请求定位。
//            502： AK参数错误，请按照说明文档重新申请AK。
//            505： AK不存在或者非法，请按照说明文档重新申请AK。
//            601： AK服务被开发者自己禁用，请按照说明文档重新申请AK。
//            602： key mcode不匹配，您的AK配置过程中安全码设置有问题，请确保：SHA1正确，“;”分号是英文状态；且包名是您当前运行应用的包名，请按照说明文档重新申请AK。
//            501～700：AK验证失败，请按照说明文档重新申请AK。

            //获取定位结果
            Map<String, String> locationInfo = new HashMap<>();

            locationInfo.put("time", location.getTime()); // 获取定位时间
            locationInfo.put("resultCode", location.getLocType() + ""); // 获取类型类型
            locationInfo.put("latitude", location.getLatitude() + ""); // 获取纬度信息
            locationInfo.put("longitude", location.getLongitude() + ""); // 获取经度信息
            locationInfo.put("radius", location.getRadius() + ""); // 获取定位精准度

            if (location.getLocType() == BDLocation.TypeGpsLocation) {
                // GPS定位结果
                locationInfo.put("speed", location.getSpeed() + ""); // 单位：公里每小时
                locationInfo.put("satellite", location.getSatelliteNumber() + ""); // 获取卫星数
                locationInfo.put("height", location.getAltitude() + ""); // 获取海拔高度信息，单位米
                locationInfo.put("direction", location.getDirection() + ""); // 获取方向信息，单位度
                locationInfo.put("addr", location.getAddrStr()); // 获取地址信息
                locationInfo.put("describe", "gps定位成功");
            } else if (location.getLocType() == BDLocation.TypeNetWorkLocation) {
                // 网络定位结果
                locationInfo.put("addr", location.getAddrStr()); // 获取地址信息
                locationInfo.put("operators", location.getOperators() + ""); // 获取运营商信息
                locationInfo.put("describe", "网络定位成功");
            } else if (location.getLocType() == BDLocation.TypeOffLineLocation) {
                // 离线定位结果
                locationInfo.put("describe", "离线定位成功，离线定位结果也是有效的");
            } else if (location.getLocType() == BDLocation.TypeServerError) {
                locationInfo.put("describe", "服务端网络定位失败，可以反馈IMEI号和大体定位时间到loc-bugs@baidu.com，会有人追查原因");
            } else if (location.getLocType() == BDLocation.TypeNetWorkException) {
                locationInfo.put("describe", "网络不同导致定位失败，请检查网络是否通畅");
            } else if (location.getLocType() == BDLocation.TypeCriteriaException) {
                locationInfo.put("describe", "无法获取有效定位依据导致定位失败，一般是由于手机的原因，处于飞行模式下一般会造成这种结果，可以试着重启手机");
            } else {
                locationInfo.put("errorCode", "-1");
                locationInfo.put("describe", "定位失败, 请重新获取位置信息");
            }

            locationInfo.put("locationDescribe", location.getLocationDescribe()); // 位置语义化信息

            List<Poi> list = location.getPoiList();    // POI数据
            if (list != null) {
                locationInfo.put("poiListSize", list.size() + ""); //
                JSONArray poiJSONArray = new JSONArray(list);
                locationInfo.put("poiList", poiJSONArray.toString()); //
            }
            mLocationListener.onReceiveLocationInfo(locationInfo);
            JLog.d("=== 定位结果 ===>>>> " + locationInfo.toString());
            mLocationService.stop();
        }

        @Override
        public void onConnectHotSpotMessage(String s, int i) {

        }
    }

}
