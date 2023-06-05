package com.cashregi.cashregi.entity;

import jakarta.persistence.*;

import static jakarta.persistence.GenerationType.SEQUENCE;

@Entity(name = "SaleCodes")
@Table(
        name = "sale_codes"
)
public class SaleCodes {

    @Id
    @SequenceGenerator(
            name = "user_sequence",
            sequenceName = "user_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = SEQUENCE,
            generator = "user_sequence"
    )
    @Column(
            name = "id"
    )
    private Integer id;

    @ManyToOne
    @JoinColumn(
            name = "product_id",
            nullable = false,
            referencedColumnName = "id",
            foreignKey = @ForeignKey(
                    name = "product_sale_fk"
            )
    )
    private Product product;

    @ Column(
            name = "newPrice"
    )
    private Double newPrice;

    @ Column(
            name = "minimal_amount"
    )
    private Integer minimalAmount; //do promek typu 2+2 potrzeba min 4

    @ Column(
            name = "max_amount"
    )
    private Integer maxAmount; //ograniczenie na ilosc sztuk

    //dopiszcie w backendzie ograniczenie ze jak jest 2+2 i ziom wezmie 5 produktow to 4 w promce a 1 nie


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public Double getNewPrice() {
        return newPrice;
    }

    public void setNewPrice(Double newPrice) {
        this.newPrice = newPrice;
    }

    public Integer getMinimalAmount() {
        return minimalAmount;
    }

    public void setMinimalAmount(Integer minimalAmount) {
        this.minimalAmount = minimalAmount;
    }

    public Integer getMaxAmount() {
        return maxAmount;
    }

    public void setMaxAmount(Integer maxAmount) {
        this.maxAmount = maxAmount;
    }
}
