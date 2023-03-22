package com.cashRegisterAndroidApp;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;
import static org.junit.Assert.fail;

import android.content.Context;
import android.graphics.Bitmap;
import android.os.Environment;

import androidx.test.ext.junit.runners.AndroidJUnit4;
import androidx.test.platform.app.InstrumentationRegistry;

import com.cashRegisterAndroidApp.barcodeDecoder.BarcodeDecoder;
import com.cashRegisterAndroidApp.barcodeGenerator.BarcodeGenerator;
import com.cashRegisterAndroidApp.barcodeGenerator.SaveBarcodeToFile;
import com.google.zxing.WriterException;

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
    public void testSaveBarcodeToFile() {
        Context context = InstrumentationRegistry.getInstrumentation().getTargetContext();
        String text = "1231231231223";
        String fileName = "test.png";
        String filePath = context.getFilesDir().getPath() + "/" + fileName;

        Bitmap bm = null;
        try {
            bm = BarcodeGenerator.generateBarcode(text);
        } catch (WriterException e) {
            throw new RuntimeException(e);
        }
        SaveBarcodeToFile.saveBitmapToFile(context, bm, fileName);
        File file = new File(filePath);
        assertTrue(file.exists());

        String decodedText = BarcodeDecoder.decodeBarcodeFromFile1(context, fileName);
        assertEquals(text, decodedText);
    }
}