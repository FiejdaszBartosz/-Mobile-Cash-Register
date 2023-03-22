package com.cashRegisterAndroidApp.barcodeDecoder;

import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.Color;

import com.google.zxing.BinaryBitmap;
import com.google.zxing.ChecksumException;
import com.google.zxing.FormatException;
import com.google.zxing.MultiFormatReader;
import com.google.zxing.NotFoundException;
import com.google.zxing.RGBLuminanceSource;
import com.google.zxing.Result;
import com.google.zxing.common.BitMatrix;
import com.google.zxing.common.DecoderResult;
import com.google.zxing.common.HybridBinarizer;
import com.google.zxing.datamatrix.decoder.Decoder;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Paths;

public class BarcodeDecoder {
    public static String decodeBarcodeFromFile1(Context context, String filename) {
        String filePath = context.getFilesDir().getPath() + "/" + filename;
        InputStream inputStream = null;
        try {
            inputStream = new FileInputStream(filePath);
        } catch (FileNotFoundException e) {
            throw new RuntimeException(e);
        }
        Bitmap bitmap = BitmapFactory.decodeStream(inputStream);
        int[] pixels = new int[bitmap.getWidth() * bitmap.getHeight()];
        bitmap.getPixels(pixels, 0, bitmap.getWidth(), 0, 0, bitmap.getWidth(), bitmap.getHeight());
        RGBLuminanceSource source = new RGBLuminanceSource(bitmap.getWidth(), bitmap.getHeight(), pixels);

        BinaryBitmap binaryBitmap = new BinaryBitmap(new HybridBinarizer(source));


        MultiFormatReader multiFormatReader = new MultiFormatReader();
        Result decoderResult;
        try {

            decoderResult = multiFormatReader.decode(binaryBitmap);
        } catch (NotFoundException e) {
            throw new RuntimeException(e);
        }
        return decoderResult.getText();
    }
}
