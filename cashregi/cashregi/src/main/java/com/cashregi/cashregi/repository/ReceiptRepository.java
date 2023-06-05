package com.cashregi.cashregi.repository;

import com.cashregi.cashregi.entity.Product;
import com.cashregi.cashregi.entity.Receipt;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.UUID;

@Repository
public interface ReceiptRepository extends JpaRepository<Receipt, UUID> {

    @Query("SELECT r FROM Receipt r where r.id = ?1")
    public Receipt getReceiptByIdEquals(UUID uuid);

}
