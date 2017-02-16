package com.framework.utilities.camera.pages;

import android.app.Activity;
import android.content.Intent;
import android.graphics.Bitmap;
import android.os.Bundle;

import com.framework.constant.Constant;
import com.framework.utilities.CameraUtility;
import com.framework.utilities.DataUtility;

/**
 * package: com.framework.utilities.camera.pages
 * author: MeePwn
 * email: maybewaityou@gmail.com
 * github: https://github.com/maybewaityou
 * date: 2017/2/16 上午10:50
 * desc:
 */

public class CameraActivity extends Activity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        initialize();
    }

    private void initialize() {
        initData();
        initViews();
        setupViews();
    }

    private void initData() {
        CameraUtility.openCamera(this, Constant.CAMERA_REQUEST_CODE);
    }

    private void initViews() {

    }

    private void setupViews() {

    }

    @Override
    public void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        Intent intent = new Intent();
        if (resultCode == Activity.RESULT_CANCELED) {
        } else if (resultCode == Activity.RESULT_OK) {
            Bitmap bitmap = (Bitmap) data.getExtras().get("data");
            intent.putExtra("response", DataUtility.bitmapToBase64(bitmap));
        }
        setResult(RESULT_OK, intent);
        finish();
    }

}
