package com.subapp;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.Toast;

import com.framework.CalculateUtility;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        int sum = CalculateUtility.sum(1, 2);
        System.out.println("=== CalculateUtility ===>>>>> " + sum);
        Toast.makeText(this, "=== CalculateUtility ===>>>>> " + sum, Toast.LENGTH_SHORT).show();
    }
}
