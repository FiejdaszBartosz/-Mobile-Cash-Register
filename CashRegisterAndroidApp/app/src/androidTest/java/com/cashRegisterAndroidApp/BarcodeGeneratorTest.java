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
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.InputStream;

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
        String text = "654321";
        String fileName = "654321.png";
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

    @Test
    public void testReadingFromPhoto1() {
        Context context = InstrumentationRegistry.getInstrumentation().getTargetContext();
        String text = "123456";
        String fileName = "IMG_9087.png";
        String filePath = context.getFilesDir().getPath() + "/" + fileName;
        InputStream inputStream = null;
        try {
            inputStream = new FileInputStream(filePath);
        } catch (FileNotFoundException e) {
            throw new RuntimeException(e);
        }

        String decodedText = BarcodeDecoder.decodeBarcodeFromStream2(inputStream, 4);
        assertEquals(text, decodedText);
    }

    @Test
    public void testReadingFromPhoto2() {
        Context context = InstrumentationRegistry.getInstrumentation().getTargetContext();
        String text = "123456";
        String fileName = "IMG_9088.png";
        String filePath = context.getFilesDir().getPath() + "/" + fileName;
        InputStream inputStream = null;
        try {
            inputStream = new FileInputStream(filePath);
        } catch (FileNotFoundException e) {
            throw new RuntimeException(e);
        }

        String decodedText = BarcodeDecoder.decodeBarcodeFromStream2(inputStream, 4);
        assertEquals(text, decodedText);
    }

    @Test
    public void testReadingFromPhoto3() {
        Context context = InstrumentationRegistry.getInstrumentation().getTargetContext();
        String text = "654321";
        String fileName = "IMG_9089.png";
        String filePath = context.getFilesDir().getPath() + "/" + fileName;
        InputStream inputStream = null;
        try {
            inputStream = new FileInputStream(filePath);
        } catch (FileNotFoundException e) {
            throw new RuntimeException(e);
        }

        String decodedText = BarcodeDecoder.decodeBarcodeFromStream2(inputStream, 4);
        assertEquals(text, decodedText);
    }
}