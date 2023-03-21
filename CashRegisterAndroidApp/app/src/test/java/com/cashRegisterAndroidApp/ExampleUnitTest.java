package com.cashRegisterAndroidApp;

import org.junit.Test;

import static org.junit.Assert.*;

import android.content.Context;

import com.cashRegisterAndroidApp.barcodeDecoder.BarcodeDecoder;
import com.cashRegisterAndroidApp.barcodeGenerator.BarcodeGenerator;
import com.cashRegisterAndroidApp.barcodeGenerator.SaveBarcodeToFile;
import com.google.zxing.WriterException;
import com.google.zxing.common.BitMatrix;

/**
 * Example local unit test, which will execute on the development machine (host).
 *
 * @see <a href="http://d.android.com/tools/testing">Testing documentation</a>
 */
public class ExampleUnitTest {
    @Test
    public void qwerty() {
        String input = "123";
        String output;
        BitMatrix bitMatrixInput;

        try {
            bitMatrixInput = SaveBarcodeToFile.savePixelsToBitMatrix(BarcodeGenerator.generateBarcodePixels("input"));
        } catch (WriterException e) {
            throw new RuntimeException(e);
        }

        output = BarcodeDecoder.decode(bitMatrixInput);
        assertEquals(input, output);
    }
}