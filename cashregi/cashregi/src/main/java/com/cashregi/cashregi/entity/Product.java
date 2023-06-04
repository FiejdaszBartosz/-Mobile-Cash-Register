package com.cashregi.cashregi.entity;

import jakarta.persistence.*;

import java.sql.Blob;

import static jakarta.persistence.GenerationType.SEQUENCE;

@Entity(name = "Product")
@Table(
        name = "products",
        uniqueConstraints = {
                @UniqueConstraint(name = "product_code_unique", columnNames = "code")
        }
)
public class Product {

    @Id
    @SequenceGenerator(
            name = "product_sequence",
            sequenceName = "product_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = SEQUENCE,
            generator = "product_sequence"
    )
    @Column(
            name = "id"
    )
    private Integer id;

    @Column(
            name = "name",
            nullable = false,
            columnDefinition = "TEXT"
    )
    private String name;

    @Column(
            name = "code",
            nullable = false
    )
    private String code;

    @Column(
            name = "description",
            nullable = false,
            columnDefinition = "TEXT"
    )
    private String description;

    @Column(
            name = "price",
            nullable = false
    )
    private Double price;

    @Column(
            name = "weight"
    )
    private Double weight;

    @Column(
            name = "photo",
            columnDefinition = "TEXT"
    )
    private String photo; //ogolnie postgres nie obsluguje blob tylko jakies gowno, ale w texcie mozna byte[] przechowywac


    public Product(){}

    public Product(String name, String code, String description, Double price, Double weight, String photo) {
        this.name = name;
        this.code = code;
        this.description = description;
        this.price = price;
        this.weight = weight;
        this.photo = photo;
    }

    @Override
    public String toString(){
        return id + " " + name + " " + code + " " + description;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getPhoto() {
        return photo;
    }

    public void setPhoto(String photo) {
        this.photo = photo;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }
}
