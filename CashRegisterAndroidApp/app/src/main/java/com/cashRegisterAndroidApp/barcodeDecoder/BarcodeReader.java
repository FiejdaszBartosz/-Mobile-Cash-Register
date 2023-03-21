package com.cashRegisterAndroidApp.barcodeDecoder;

import android.content.Context;
import android.widget.TextView;

import com.google.zxing.aztec.detector.Detector;

/* TODO dekodowanie kodów kreskowych
*  1. uzywamy klasy "Detector", podając w konstruktorze obraz z kamery (BitMatrix image)
*  2. uzywamy Detector.detect() - otrzymujemy klasę "DetectorResult"
*  3. uzywamy DetectorResult.getBits() aby otrzymac BitMatrix z dokladnie odszyfrowanym obszarem
*  4. bity z BitMatrix dekodujemy ozywając Decoder.decode(BitMatrix bits) - otrzymujemy klasę "DecoderResult"
*  5. z DecoderResult "getujemy" wybrane informacje (np. getText() - string)
*
*  Detector detector = Detector(image)
*  DetectorResult detectorResult = detector.detect()
*  BitMatrix barcodeData = detectorResult.getBits()
*  DecoderResult decoderResult = Decoder.decode(barcodeData)
*  String id = decoderResult.getText()
* */
/*
public class BarcodeReader implements Detector.Processor<Barcode> {

    private Context mContext;
    private TextView mResultTextView;

    public BarcodeReader(Context context, TextView resultTextView) {
        mContext = context;
        mResultTextView = resultTextView;
    }

    @Override
    public void release() {
        // Do nothing
    }

    @Override
    public void receiveDetections(Detector.Detections<Barcode> detections) {
        SparseArray<Barcode> barcodes = detections.getDetectedItems();
        if (barcodes.size() != 0) {
            Barcode barcode = barcodes.valueAt(0);
            if (barcode != null) {
                String scannedCode = barcode.rawValue;
                if (scannedCode != null && !scannedCode.isEmpty()) {
                    mResultTextView.post(() -> {
                        mResultTextView.setText(scannedCode);
                        Toast.makeText(mContext, "Code scanned: " + scannedCode, Toast.LENGTH_SHORT).show();
                    });
                }
            }
        }
    }
}
*/