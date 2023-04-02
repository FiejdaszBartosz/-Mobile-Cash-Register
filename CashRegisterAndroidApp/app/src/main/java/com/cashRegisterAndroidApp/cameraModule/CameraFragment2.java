package com.cashRegisterAndroidApp.cameraModule;

import androidx.camera.core.Camera;
import androidx.camera.core.CameraSelector;
import androidx.camera.core.Preview;
import androidx.camera.lifecycle.ProcessCameraProvider;
import androidx.core.content.ContextCompat;
import androidx.fragment.app.Fragment;

import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.Surface;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Toast;

import com.cashRegisterAndroidApp.R;
import com.google.common.util.concurrent.ListenableFuture;

import java.util.concurrent.ExecutionException;

public class CameraFragment2 extends Fragment {

    private ListenableFuture<ProcessCameraProvider> cameraProviderFuture;
    private Camera camera;

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        return inflater.inflate(R.layout.camera_preview, container, false);
    }

    @Override
    public void onViewCreated(View view, Bundle savedInstanceState) {
        super.onViewCreated(view, savedInstanceState);
        cameraProviderFuture = ProcessCameraProvider.getInstance(requireContext());

        cameraProviderFuture.addListener(() -> {
            try {
                // Camera provider is now guaranteed to be available
                ProcessCameraProvider cameraProvider = cameraProviderFuture.get();
                // Set up the preview use case
                Preview preview = new Preview.Builder().build();
                // Set up the camera selector use case
                CameraSelector cameraSelector = new CameraSelector.Builder()
                        .requireLensFacing(CameraSelector.LENS_FACING_BACK)
                        .build();

                // Bind the preview and camera selector use case to the lifecycle of this fragment
                cameraProvider.bindToLifecycle(getViewLifecycleOwner(), cameraSelector, preview);

                // Attach the preview surface to the view
                Surface surface = view.findViewById(R.id.surface_view).getHolder().getSurface();
                preview.setSurfaceProvider(() -> surface);

                // Get the camera instance
                camera = cameraProvider.bindToLifecycle(getViewLifecycleOwner(), cameraSelector, preview);

            } catch (ExecutionException | InterruptedException e) {
                // Handle any errors
                Toast.makeText(requireContext(), "Error starting camera", Toast.LENGTH_SHORT).show();
            }
        }, ContextCompat.getMainExecutor(requireContext()));
    }

    @Override
    public void onDestroyView() {
        super.onDestroyView();
        // Release the camera when the view is destroyed
        if (camera != null) {
            camera.release();
            camera = null;
        }
    }
}
