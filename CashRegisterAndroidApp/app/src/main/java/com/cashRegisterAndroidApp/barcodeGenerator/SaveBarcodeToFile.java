package com.cashRegisterAndroidApp.barcodeGenerator;

import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.Color;

import com.cashRegisterAndroidApp.barcodeDecoder.Barcode;
import com.cashRegisterAndroidApp.barcodeGenerator.BarcodeGenerator;
import com.google.zxing.common.BitMatrix;

import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.ByteBuffer;

public class SaveBarcodeToFile {
    public static void savePixelsToFile(Context context, int[] pixels, String filename) {
        int width = Barcode.BARCODE_WIDTH;
        int height = Barcode.BARCODE_HEIGHT;
        byte[] bitmapData = new byte[width * height * 4];
        for (int i = 0; i < pixels.length; i++) {
            int pixel = pixels[i];
            bitmapData[i * 4] = (byte) Color.red(pixel);
            bitmapData[i * 4 + 1] = (byte) Color.green(pixel);
            bitmapData[i * 4 + 2] = (byte) Color.blue(pixel);
            bitmapData[i * 4 + 3] = (byte) Color.alpha(pixel);
        }

        FileOutputStream outputStream = null;
        try {
            outputStream = context.openFileOutput(filename, Context.MODE_PRIVATE);
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

    public static void saveBitmapToFile(Context context, Bitmap bitmap, String filename) {
        try {
            FileOutputStream outputStream = context.openFileOutput(filename, Context.MODE_PRIVATE);
            bitmap.compress(Bitmap.CompressFormat.PNG, 100, outputStream);
            outputStream.flush();
            outputStream.close();
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
}

