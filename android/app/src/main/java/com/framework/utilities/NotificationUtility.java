package com.framework.utilities;

import android.app.NotificationManager;
import android.app.PendingIntent;
import android.content.Context;
import android.content.Intent;
import android.support.v4.app.NotificationCompat;

import static android.content.Context.NOTIFICATION_SERVICE;

/**
 * package: com.framework.utilities
 * author: MeePwn
 * email: maybewaityou@gmail.com
 * github: https://github.com/maybewaityou
 * date: 2017/1/16 下午12:05
 * desc:
 */

public class NotificationUtility {

    private static NotificationManager mManager;
    private static Context mContext;

    public static void init(Context context) {
        mContext = context;
        mManager = (NotificationManager) context.getSystemService(NOTIFICATION_SERVICE);
    }

    public static void showNotification(int icon, String title, String message, Class cls) {
        // 点击通知栏, 进入相应页面
        Intent i = new Intent(mContext, cls);
        PendingIntent pendingIntent = PendingIntent.getActivity(mContext, 0, i, PendingIntent.FLAG_UPDATE_CURRENT);
        //创建 Notification.Builder 对象
        NotificationCompat.Builder builder = new NotificationCompat.Builder(mContext)
                .setSmallIcon(icon)
                //点击通知后自动清除
                .setAutoCancel(true)
                .setContentTitle(title)
                .setContentText(message)
                .setContentIntent(pendingIntent);
        //发送通知
        mManager.notify(0, builder.build());
    }
}
