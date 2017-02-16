package com.framework.modules_and_widgets.modules;

import android.app.Activity;
import android.content.Intent;

import com.facebook.react.bridge.ActivityEventListener;
import com.facebook.react.bridge.BaseActivityEventListener;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.framework.constant.Constant;
import com.framework.utilities.camera.pages.CameraActivity;

import static android.app.Activity.RESULT_OK;

/**
 * package: com.framework.modules_and_widgets.modules
 * author: MeePwn
 * email: maybewaityou@gmail.com
 * github: https://github.com/maybewaityou
 * date: 2017/1/13 上午11:27
 * desc:
 */

public class JumpToNativeModule extends ReactContextBaseJavaModule {

    private static int ACTIVITY_REQUEST_CODE = 100;

    private Callback mSuccessCallback;
    private Callback mFailureCallback;

    public JumpToNativeModule(ReactApplicationContext reactContext) {
        super(reactContext);
        // Add the listener for `onActivityResult`
        reactContext.addActivityEventListener(mActivityEventListener);
    }

    @Override
    public String getName() {
        return "JumpToNativeModule";
    }

    @ReactMethod
    public void toActivity(String activityName, String params) {
        try {
            Activity currentActivity = getCurrentActivity();
            if (currentActivity != null) {
                System.out.println("------>>>> " + params);

                Intent intent = new Intent(currentActivity, Class.forName(activityName));
                intent.putExtra("params", params);
                currentActivity.startActivity(intent);
            }
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
    }

    @ReactMethod
    public void toActivityForResult(String activityName, String params, int requestCode, final Callback successCallback, final Callback failureCallback) {
        try {
            Activity currentActivity = getCurrentActivity();
            if (currentActivity != null) {
                System.out.println("------>>>> " + params);

                mSuccessCallback = successCallback;
                mFailureCallback = failureCallback;

                Intent intent = new Intent(currentActivity, Class.forName(activityName));
                intent.putExtra("params", params);
                currentActivity.startActivityForResult(intent, requestCode);
            }
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
    }

    @ReactMethod
    public void openCamera(String params, int requestCode, final Callback successCallback, final Callback failureCallback) {
        Activity currentActivity = getCurrentActivity();
        if (currentActivity != null) {
            System.out.println("------>>>> " + params);

            mSuccessCallback = successCallback;
            mFailureCallback = failureCallback;

            Intent intent = new Intent(currentActivity, CameraActivity.class);
            intent.putExtra("params", params);
            currentActivity.startActivityForResult(intent, requestCode);
        }
    }

    private final ActivityEventListener mActivityEventListener = new BaseActivityEventListener() {

        @Override
        public void onActivityResult(Activity activity, int requestCode, int resultCode, Intent data) {
            if (requestCode == ACTIVITY_REQUEST_CODE) {
                if (mSuccessCallback != null && mFailureCallback != null) {
                    if (resultCode == Activity.RESULT_CANCELED) {
                        mFailureCallback.invoke("failure");
                    } else if (resultCode == RESULT_OK) {
                        mSuccessCallback.invoke(data.getStringExtra("response"));
                    }
                    mSuccessCallback = null;
                    mFailureCallback = null;
                }
            } else if (requestCode == Constant.CAMERA_REQUEST_CODE) {
                if (mSuccessCallback != null && mFailureCallback != null) {
                    if (resultCode == Activity.RESULT_CANCELED) {
                        mFailureCallback.invoke("failure");
                    } else if (resultCode == RESULT_OK) {
                        mSuccessCallback.invoke(data.getStringExtra("response"));
                    }
                    mSuccessCallback = null;
                    mFailureCallback = null;
                }
            }
        }
    };

}
