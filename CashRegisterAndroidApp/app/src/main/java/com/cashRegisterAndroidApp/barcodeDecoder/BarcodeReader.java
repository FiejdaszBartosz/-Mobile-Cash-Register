package com.cashRegisterAndroidApp.barcodeDecoder;

import android.content.Context;
import android.widget.TextView;

import com.google.zxing.aztec.detector.Detector;

/*TODO plan dzialania*/

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
