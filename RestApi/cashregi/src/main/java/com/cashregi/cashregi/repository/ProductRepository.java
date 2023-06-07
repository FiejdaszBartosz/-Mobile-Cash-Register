package com.cashregi.cashregi.repository;

import com.cashregi.cashregi.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {

    @Query("SELECT p FROM Product p where p.code = ?1")
    Product getProductByCodeEquals(String id);
}
