package com.cashRegisterAndroidApp.barcodeGenerator;

import android.graphics.Bitmap;
import android.graphics.Color;

import com.cashRegisterAndroidApp.barcodeDecoder.Barcode;
import com.cashRegisterAndroidApp.barcodeGenerator.BarcodeGenerator;
import com.google.zxing.common.BitMatrix;

import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.ByteBuffer;

public class SaveBarcodeToFile {
    public static void savePixelsToFile(int[] pixels, String filename) {
        int width = Barcode.BARCODE_WIDTH;
        int height = Barcode.BARCODE_HEIGHT;
        byte[] bitmapData = new byte[width * height * 4]; // każdy piksel zajmuje 4 bajty (ARGB)
        for (int i = 0; i < pixels.length; i++) {
            int pixel = pixels[i];
            bitmapData[i * 4] = (byte) Color.red(pixel);
            bitmapData[i * 4 + 1] = (byte) Color.green(pixel);
            bitmapData[i * 4 + 2] = (byte) Color.blue(pixel);
            bitmapData[i * 4 + 3] = (byte) Color.alpha(pixel);
        }

        FileOutputStream outputStream = null;
        try {
            outputStream = new FileOutputStream(filename);
            // tworzymy strumień zapisu i zapisujemy tablicę pikseli jako plik PNG
            Bitmap bmp = Bitmap.createBitmap(width, height, Bitmap.Config.ARGB_8888);
            bmp.copyPixelsFromBuffer(ByteBuffer.wrap(bitmapData));
            bmp.compress(Bitmap.CompressFormat.PNG, 100, outputStream);
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            try {
                if (outputStream != null) {
                    outputStream.close();
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }
}

