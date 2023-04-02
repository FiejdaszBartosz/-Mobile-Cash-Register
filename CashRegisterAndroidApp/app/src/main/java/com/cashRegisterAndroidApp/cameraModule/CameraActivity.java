package com.cashRegisterAndroidApp.cameraModule;

import android.Manifest;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.graphics.Bitmap;
import android.net.Uri;
import android.os.Bundle;
import android.provider.MediaStore;
import android.provider.Settings;
import android.util.Log;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.app.ActivityCompat;
import androidx.core.content.ContextCompat;

import com.cashRegisterAndroidApp.R;

public class CameraActivity extends AppCompatActivity {
    private static final String TAG = CameraActivity.class.getSimpleName();
    private static final int CAMERA_PERMISSION_REQUEST_CODE = 100;
    private static final int CAMERA_REQUEST_CODE = 101;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_camera);

        // Sprawdź, czy aplikacja ma uprawnienia do korzystania z kamery
        if (ContextCompat.checkSelfPermission(this, Manifest.permission.CAMERA) != PackageManager.PERMISSION_GRANTED) {
            // Jeśli nie, poproś użytkownika o zgodę na korzystanie z kamery
            ActivityCompat.requestPermissions(this, new String[]{Manifest.permission.CAMERA}, CAMERA_PERMISSION_REQUEST_CODE);
        } else {
            // Jeśli tak, uruchom aplikację aparatu
            startCamera();
        }
    }

    // Metoda wywoływana po zakończeniu procesu prośby o uprawnienia
    @Override
    public void onRequestPermissionsResult(int requestCode, @NonNull String[] permissions, @NonNull int[] grantResults) {
        super.onRequestPermissionsResult(requestCode, permissions, grantResults);
        if (requestCode == CAMERA_PERMISSION_REQUEST_CODE) {
            if (grantResults.length > 0 && grantResults[0] == PackageManager.PERMISSION_GRANTED) {
                // Jeśli użytkownik zgodził się na korzystanie z kamery, uruchom aplikację aparatu
                startCamera();
            } else {
                // Jeśli użytkownik nie zgodził się na korzystanie z kamery, wyświetl mu informację o tym i poproś ponownie o zgodę
                Toast.makeText(this, "Aby korzystać z aparatu, musisz udzielić uprawnień do korzystania z kamery.", Toast.LENGTH_LONG).show();
                Intent intent = new Intent();
                intent.setAction(Settings.ACTION_APPLICATION_DETAILS_SETTINGS);
                Uri uri = Uri.fromParts("package", getPackageName(), null);
                intent.setData(uri);
                startActivity(intent);
            }
        }
    }

    // Metoda uruchamiająca aplikację aparatu
    private void startCamera() {
        Intent cameraIntent = new Intent(MediaStore.ACTION_IMAGE_CAPTURE);
        startActivityForResult(cameraIntent, CAMERA_REQUEST_CODE);
    }

    // Metoda wywoływana po zakończeniu robienia zdjęcia
    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        if (requestCode == CAMERA_REQUEST_CODE && resultCode == RESULT_OK) {
            // Pobierz zrobione zdjęcie z danych zwróconych przez Intent
            Bundle extras = data.getExtras();
            if (extras != null) {
                // Zdjęcie jest przechowywane jako Bitmap, więc można je wykorzystać do wyświetlenia lub przetworzenia w inny sposób
                Bitmap photo = (Bitmap) extras.get("data");
                // Tutaj można dodać kod, który przetworzy zdjęcie w wybrany sposób
            }
        }
    }
}

