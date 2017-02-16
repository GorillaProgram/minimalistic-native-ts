package com.framework.utilities.camera.pages;

import android.content.Intent;
import android.graphics.Bitmap;

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
//        setContentView(R.layout.activity_camera);
    }

    @Override
    public void initData() {
        CameraUtility.openCamera(this);
    }

    @Override
    public void initViews() {
//        mSurfaceView = (SurfaceView) findViewById(R.id.surfaceView);
//        mStartButton = (Button) findViewById(R.id.startButton);
//        mSurfaceHolder = mSurfaceView.getHolder();
    }

    @Override
    public void setupViews() {

    }

    @Override
    public void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        Bitmap bp = (Bitmap) data.getExtras().get("data");
        System.out.println("=== getByteCount ====>>>> " + bp.getByteCount());
        System.out.println("=== bp ====>>>> " + bp);
        Intent intent = new Intent();
        intent.putExtra("response", "mu haha~");
        setResult(RESULT_OK, intent);
        finish();
    }

}
