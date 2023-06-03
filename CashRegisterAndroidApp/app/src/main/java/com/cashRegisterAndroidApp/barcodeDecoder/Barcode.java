package com.cashRegisterAndroidApp.barcodeDecoder;

import com.google.zxing.BarcodeFormat;

public abstract class Barcode {
    public static final int BARCODE_WIDTH = 400;
    public static final int BARCODE_HEIGHT = 200;
    public static final BarcodeFormat BARCODE_FORMAT = BarcodeFormat.CODE_128;
}
