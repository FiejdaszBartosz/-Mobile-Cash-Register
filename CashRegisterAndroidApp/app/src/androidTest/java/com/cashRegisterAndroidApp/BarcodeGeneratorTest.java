package com.cashRegisterAndroidApp;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.fail;

import android.content.Context;
import android.os.Environment;

import androidx.test.ext.junit.runners.AndroidJUnit4;
import androidx.test.platform.app.InstrumentationRegistry;

import com.cashRegisterAndroidApp.barcodeDecoder.BarcodeDecoder;
import com.cashRegisterAndroidApp.barcodeGenerator.BarcodeGenerator;
import com.cashRegisterAndroidApp.barcodeGenerator.SaveBarcodeToFile;

import org.junit.Rule;
import org.junit.Test;
import org.junit.runner.RunWith;

import java.io.File;

/**
 * Instrumented test, which will execute on an Android device.
 *
 * @see <a href="http://d.android.com/tools/testing">Testing documentation</a>
 */
@RunWith(AndroidJUnit4.class)
public class BarcodeGeneratorTest {


    @Test
    public void testSaveAndDecodeBarcode() {
        String text = "Hello World";
        String filename = "test.png";
        try {
            Context appContext = InstrumentationRegistry.getInstrumentation().getTargetContext();
            int[] pixels = BarcodeGenerator.generateBarcodePixels(text);
            SaveBarcodeToFile.savePixelsToFile(pixels, filename);
            boolean[][] decodedBarcode = BarcodeDecoder.decodeBarcodeFromFile(filename);
            String decodedText = BarcodeDecoder.decode(decodedBarcode);
            assertEquals(text, decodedText);
        } catch (Exception e) {
            fail("Exception thrown: " + e.getMessage());
        } finally {

        }
    }
}