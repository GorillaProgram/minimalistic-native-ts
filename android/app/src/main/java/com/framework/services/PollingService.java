/**
 * @FileName PollingService.java
 */
package com.framework.services;

import android.app.Service;
import android.content.Intent;
import android.os.IBinder;

import com.framework.pages.activity.MessageActivity;
import com.framework.utilities.NotificationUtility;
import com.minimalisticnativets.R;

/**
 * package: com.framework.pages.activity
 * author: MeePwn
 * email: maybewaityou@gmail.com
 * github: https://github.com/maybewaityou
 * date: 2017/1/13 上午11:31
 * desc:
 */

public class PollingService extends Service {

    public static final String ACTION = "com.framework.services.PollingService";

    @Override
    public IBinder onBind(Intent intent) {
        return null;
    }

    @Override
    public void onCreate() {

    }

    @Override
    public int onStartCommand(Intent intent, int flags, int startId) {
        new PollingThread().start();
        return super.onStartCommand(intent, flags, startId);
    }

    private void showNotification(String title, String message) {
        NotificationUtility.showNotification(R.mipmap.ic_launcher, title, message, MessageActivity.class);
    }

    /**
     * Polling thread 模拟像Service轮询的异步线程
     *
     * @Author MeePwn
     */
    class PollingThread extends Thread {
        @Override
        public void run() {
            showNotification("title", "message");
        }
    }

    @Override
    public void onDestroy() {
        super.onDestroy();
        System.out.println("Service: onDestroy");
    }

}