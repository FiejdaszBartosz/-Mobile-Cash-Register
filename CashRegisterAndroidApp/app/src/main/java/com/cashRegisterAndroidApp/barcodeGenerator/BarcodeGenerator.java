package com.cashRegisterAndroidApp.barcodeGenerator;

import android.graphics.Color;

import com.cashRegisterAndroidApp.barcodeDecoder.Barcode;
import com.google.zxing.BarcodeFormat;
import com.google.zxing.MultiFormatWriter;
import com.google.zxing.WriterException;
import com.google.zxing.common.BitMatrix;


public class BarcodeGenerator {
    public static int[] generateBarcodePixels(String id) throws WriterException {
        BarcodeFormat format = Barcode.BARCODE_FORMAT;
        MultiFormatWriter writer = new MultiFormatWriter();
        BitMatrix bitMatrix = writer.encode(id, format, Barcode.BARCODE_WIDTH, Barcode.BARCODE_HEIGHT);

        int[] pixels = new int[Barcode.BARCODE_WIDTH * Barcode.BARCODE_HEIGHT];
        for (int y = 0; y < Barcode.BARCODE_HEIGHT; y++) {
            for (int x = 0; x < Barcode.BARCODE_WIDTH; x++) {
                pixels[y * Barcode.BARCODE_WIDTH + x] = bitMatrix.get(x, y) ? Color.BLACK : Color.WHITE;
            }
        }
        return pixels;
    }

}
