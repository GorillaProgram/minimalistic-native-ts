package com.framework.utilities.camera.pages;

import android.content.Intent;

import com.framework.base.UIActivity;
import com.framework.utilities.CameraUtility;

/**
 * package: com.framework.utilities.camera.pages
 * author: MeePwn
 * email: maybewaityou@gmail.com
 * github: https://github.com/maybewaityou
 * date: 2017/2/16 上午10:50
 * desc:
 */

public class CameraActivity extends UIActivity {

    @Override
    public void setContentView() {

    }

    @Override
    public void initData() {
        CameraUtility.openCamera(this, 123);
    }

    @Override
    public void initViews() {

    }

    @Override
    public void setupViews() {

    }

    @Override
    public void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);

    }

}
