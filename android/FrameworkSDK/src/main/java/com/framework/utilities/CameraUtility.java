package com.framework.utilities;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.provider.MediaStore;

/**
 * package: com.framework.utilities
 * author: MeePwn
 * email: maybewaityou@gmail.com
 * github: https://github.com/maybewaityou
 * date: 2017/1/22 下午3:18
 * desc:
 */

public class CameraUtility {

    public static void openCamera(Context context, int requestCode) {
        Intent intent = new Intent(MediaStore.ACTION_IMAGE_CAPTURE);
        ((Activity) context).startActivityForResult(intent, requestCode);
    }

}
