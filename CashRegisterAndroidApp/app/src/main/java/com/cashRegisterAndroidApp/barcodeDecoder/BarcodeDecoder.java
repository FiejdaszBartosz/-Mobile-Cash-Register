package com.cashRegisterAndroidApp.barcodeDecoder;

import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.Color;

import com.cashRegisterAndroidApp.barcodeGenerator.BarcodeGenerator;
import com.cashRegisterAndroidApp.barcodeGenerator.SaveBarcodeToFile;
import com.google.zxing.ChecksumException;
import com.google.zxing.FormatException;
import com.google.zxing.MultiFormatReader;
import com.google.zxing.common.BitMatrix;
import com.google.zxing.common.DecoderResult;
import com.google.zxing.datamatrix.decoder.Decoder;

import java.io.IOException;

public class BarcodeDecoder {
    public static boolean[][] decodeBarcodeFromFile(String filename) {
        Bitmap bitmap = BitmapFactory.decodeFile(filename);
        int[] pixels = new int[bitmap.getWidth() * bitmap.getHeight()];
        bitmap.getPixels(pixels, 0, bitmap.getWidth(), 0, 0, bitmap.getWidth(), bitmap.getHeight());
        return savePixelsToBooleanArray(pixels);
    }

    public static boolean[][] savePixelsToBooleanArray(int[] pixels) {
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

        boolean[][] binaryValues = new boolean[height][width];
        for (int y = 0; y < height; y++) {
            int offset = y * width * 4;
            for (int x = 0; x < width; x++) {
                int pixel = Color.argb(
                        bitmapData[offset + x * 4 + 3] & 0xFF,
                        bitmapData[offset + x * 4] & 0xFF,
                        bitmapData[offset + x * 4 + 1] & 0xFF,
                        bitmapData[offset + x * 4 + 2] & 0xFF);
                binaryValues[y][x] = pixel != Color.WHITE;
            }
        }

        return binaryValues;
    }

    public static String decode(boolean[][] img) {
        Decoder decoder = new Decoder();
        DecoderResult result = null;
        try {
            result = decoder.decode(img);
        } catch (FormatException | ChecksumException e) {
            throw new RuntimeException(e);
        }

        return result.getText();
    }

    public static String decode(BitMatrix bitMatrix) {
        Decoder decoder = new Decoder();
        DecoderResult result = null;
        try {
            result = decoder.decode(bitMatrix);
        } catch (FormatException | ChecksumException e) {
            throw new RuntimeException(e);
        }

        return result.getText();
    }
}
