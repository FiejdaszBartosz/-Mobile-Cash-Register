package com.cashRegisterAndroidApp;

import androidx.appcompat.app.AppCompatActivity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

import com.cashRegisterAndroidApp.cameraModule.CameraActivity;
import com.cashRegisterAndroidApp.cameraModule.CameraActivity2;

public class MainActivity extends AppCompatActivity {

    private Button cameraButton;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        // Inicjujemy przycisk kamery
        cameraButton = findViewById(R.id.camera_button);

        // Przypisujemy akcję przyciskowi kamery
        cameraButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                // Tworzymy intencję uruchamiającą CameraActivity
                Intent intent = new Intent(MainActivity.this, CameraActivity2.class);
                startActivity(intent);
            }
        });
    }
}
