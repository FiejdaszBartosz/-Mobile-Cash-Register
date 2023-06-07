package com.cashregi.cashregi.entity;

import jakarta.persistence.*;

import static jakarta.persistence.GenerationType.SEQUENCE;

@Entity(name = "ProductReceipt")
@Table(name = "product_receipt")
public class ProductReceipt {

    @SequenceGenerator(
            name = "product_receipt_sequence",
            sequenceName = "product_receipt_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = SEQUENCE,
            generator = "product_receipt_sequence"
    )
    @Column(
            name = "id"
    )
    @Id
    private Integer id;

    @ManyToOne
    //@MapsId("receiptId")
    @JoinColumn(
            name = "receipt_id",
            referencedColumnName = "id",
            foreignKey = @ForeignKey(
                    name = "receipt_id_fk"
            )
    )
    private Receipt receipt;

    @ManyToOne
    //@MapsId("productId")
    @JoinColumn(
            name = "product_id",
            referencedColumnName = "id",
            foreignKey = @ForeignKey(
                    name = "product_id_fk"
            )
    )
    private Product product;

    @Column(
            name = "product_count"
    )
    private Integer productCount;


    public ProductReceipt(){}
    public ProductReceipt(Receipt receipt, Product product, Integer productCount) {
        this.receipt = receipt;
        this.product = product;
        this.productCount = productCount;
    }

    public Receipt getReceipt() {
        return receipt;
    }

    public void setReceipt(Receipt receipt) {
        this.receipt = receipt;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public Integer getProductCount() {
        return productCount;
    }

    public void setProductCount(Integer productCount) {
        this.productCount = productCount;
    }
}
