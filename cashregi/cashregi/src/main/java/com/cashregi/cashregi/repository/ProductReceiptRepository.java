package com.cashregi.cashregi.repository;

import com.cashregi.cashregi.entity.Product;
import com.cashregi.cashregi.entity.ProductReceipt;
import com.cashregi.cashregi.entity.Receipt;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface ProductReceiptRepository extends JpaRepository<ProductReceipt, Integer> {

    @Query("SELECT pr from ProductReceipt pr where pr.product = ?1 and pr.receipt = ?2")
    Optional<ProductReceipt> getProductReceiptByProductAndReceipt(Product product, Receipt receipt);

}
