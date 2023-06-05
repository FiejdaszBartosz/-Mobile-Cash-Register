package com.cashregi.cashregi.service;

import com.cashregi.cashregi.entity.Product;
import com.cashregi.cashregi.entity.ProductReceipt;
import com.cashregi.cashregi.entity.Receipt;
import com.cashregi.cashregi.repository.ProductReceiptRepository;
import com.cashregi.cashregi.repository.ProductRepository;
import com.cashregi.cashregi.repository.ReceiptRepository;
import com.cashregi.cashregi.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.UUID;

@Service
public class ReceiptService {

    private ReceiptRepository receiptRepository;
    private ProductReceiptRepository productReceiptRepository;
    private ProductRepository productRepository;

    @Autowired
    public ReceiptService(ReceiptRepository receiptRepository, ProductReceiptRepository productReceiptRepository, ProductRepository productRepository) {
        this.receiptRepository = receiptRepository;
        this.productReceiptRepository = productReceiptRepository;
        this.productRepository = productRepository;
    }

    public Receipt getReceipt(UUID receipt_id){
        return receiptRepository.getReceiptByIdEquals(receipt_id);
    }

    public Product getProduct(String product_code){
        return productRepository.getProductByCodeEquals(product_code);
    }

    public Product addProductToReceipt(UUID receipt_id, String product_code){
        Receipt receipt = getReceipt(receipt_id);
        Product product = getProduct(product_code);

        ProductReceipt pr = productReceiptRepository.getProductReceiptByProductAndReceipt(product, receipt)
                            .orElse(new ProductReceipt(receipt, product, 0));
        pr.setProductCount(pr.getProductCount() + 1);
        productReceiptRepository.save(pr);

        receipt.setTotal(receipt.getTotal() + product.getPrice());
        receiptRepository.save(receipt);

        return product;
    }

    public void deleteProductFromReceipt(UUID receipt_id, String product_code){
        Receipt receipt = getReceipt(receipt_id);
        Product product = getProduct(product_code);

        ProductReceipt pr = productReceiptRepository.getProductReceiptByProductAndReceipt(product, receipt)
                .orElse(null);

        assert pr != null;

        if(pr.getProductCount() > 1) {
            pr.setProductCount(pr.getProductCount() - 1);
            productReceiptRepository.save(pr);
        }
        else{
            productReceiptRepository.delete(pr);
        }

        receipt.setTotal(receipt.getTotal() - product.getPrice());
        receiptRepository.save(receipt);
    }

    public Receipt finalzeRecepit(UUID receipt_id){
        Receipt receipt = receiptRepository.getReceiptByIdEquals(receipt_id);
        LocalDateTime currentDateTime = LocalDateTime.now();
        receipt.setEndTime(currentDateTime);
        receiptRepository.save(receipt);
        return receipt;
    }

    public void deleteReceipt(UUID receipt_id){
        Receipt receipt = receiptRepository.getReceiptByIdEquals(receipt_id);
        receiptRepository.delete(receipt);
    }

    public List<ProductCount> get(UUID receipt_id){
        Receipt receipt = receiptRepository.getReceiptByIdEquals(receipt_id);
        List<ProductCount> list = new ArrayList<>();

        for(ProductReceipt pr: receipt.getProductReceipts()){
            Product product = pr.getProduct();
            list.add(new ProductCount(product.getId(), product.getName(), product.getCode(), product.getPrice(), pr.getProductCount()));
        }

        return list;
    }  return receipt.getProductReceipts();
    }
}
