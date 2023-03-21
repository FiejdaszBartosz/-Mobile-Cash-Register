package com.cashRegisterAndroidApp;

import static org.junit.Assert.assertEquals;

import android.content.Context;
import android.graphics.Bitmap;

import androidx.test.ext.junit.runners.AndroidJUnit4;
import androidx.test.platform.app.InstrumentationRegistry;

import com.cashRegisterAndroidApp.barcodeDecoder.BarcodeDecoder;
import com.cashRegisterAndroidApp.barcodeGenerator.BarcodeGenerator;
import com.cashRegisterAndroidApp.barcodeGenerator.SaveBarcodeToFile;
import com.google.zxing.WriterException;
import com.google.zxing.common.BitMatrix;

import org.junit.Test;
import org.junit.runner.RunWith;

/**
 * Instrumented test, which will execute on an Android device.
 *
 * @see <a href="http://d.android.com/tools/testing">Testing documentation</a>
 */
@RunWith(AndroidJUnit4.class)
public class BarcodeBitmapReaderTest {
    @Test
    public void qwerty() {
        //Context appContext = InstrumentationRegistry.getInstrumentation().getTargetContext();
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