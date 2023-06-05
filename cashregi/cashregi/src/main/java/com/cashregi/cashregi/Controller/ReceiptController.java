package com.cashregi.cashregi.Controller;

import com.cashregi.cashregi.entity.Product;
import com.cashregi.cashregi.service.ReceiptService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
public class ReceiptController {

    private ReceiptService receiptService;

    @Autowired
    public ReceiptController(ReceiptService receiptService) {
        this.receiptService = receiptService;
    }

    @DeleteMapping("/product/{receipt_id}/{product_code}")
    public void deleteProductFromReceipt(
            @PathVariable String product_code,
            @PathVariable UUID receipt_id
    ){
        receiptService.deleteProductFromReceipt(receipt_id,product_code);
    }

    @DeleteMapping("/receipt/{receipt_id}")
    public void deleteReceipt(
            @PathVariable UUID receipt_id
    ){
        receiptService.deleteReceipt(receipt_id);
    }

    @PostMapping("/receipt/{receipt_id}")
    public ResponseEntity<?> finalizeReceipt(
            @PathVariable UUID receipt_id
    ){
        return ResponseEntity.ok(receiptService.finalzeRecepit(receipt_id));
    }

    @PostMapping("product/{receipt_id}/{product_id}")
    public ResponseEntity<?> addProductToReceipt(
            @PathVariable String receipt_id,
            @PathVariable String product_id
    ){
        String cleanedReceiptId = receipt_id.replaceAll("[\"/]", "");
        System.out.println(cleanedReceiptId);
        UUID receiptUUID = UUID.fromString(cleanedReceiptId);

        Product pr = receiptService.addProductToReceipt(receiptUUID, product_id);
        if(pr == null)
            return ResponseEtity.ok("Brak produktu")
        return ResponseEntity.ok(pr);
    }

    @GetMapping("/receipt/{receipt_id}")
    public ResponseEntity<?> getAllProd(
            @PathVariable UUID receipt_id
    ){
        return ResponseEntity.ok(receiptService.get(receipt_id));
    }
}
