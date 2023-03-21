package com.cashRegisterAndroidApp.barcodeDecoder;

import com.google.zxing.ChecksumException;
import com.google.zxing.FormatException;
import com.google.zxing.MultiFormatReader;
import com.google.zxing.common.BitMatrix;
import com.google.zxing.common.DecoderResult;
import com.google.zxing.datamatrix.decoder.Decoder;

public class BarcodeDecoder {
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
