package com.cashRegisterAndroidApp.barcodeGenerator;

import android.graphics.Color;
import com.google.zxing.BarcodeFormat;
import com.google.zxing.MultiFormatWriter;
import com.google.zxing.WriterException;
import com.google.zxing.common.BitMatrix;


public class BarcodeGenerator {
    public static final int BARCODE_WIDTH = 400;
    public static final int BARCODE_HEIGHT = 200;

    public static int[] generateBarcodePixels(String id) throws WriterException {
        BarcodeFormat format = BarcodeFormat.CODE_128;
        MultiFormatWriter writer = new MultiFormatWriter();
        BitMatrix bitMatrix = writer.encode(id, format, BARCODE_WIDTH, BARCODE_HEIGHT);

        int[] pixels = new int[BARCODE_WIDTH * BARCODE_HEIGHT];
        for (int y = 0; y < BARCODE_HEIGHT; y++) {
            for (int x = 0; x < BARCODE_WIDTH; x++) {
                pixels[y * BARCODE_WIDTH + x] = bitMatrix.get(x, y) ? Color.BLACK : Color.WHITE;
            }
        }
        return pixels;
    }

}
