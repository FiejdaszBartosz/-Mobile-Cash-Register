package com.cashregi.cashregi.Controller;

public class ProductCount {
    private Integer id;
    private String name;
    private String code;
    private Double price;
    private Integer productCount;

    public ProductCount(Integer id, String name, String code, Double price, Integer productCount) {
        this.id = id;
        this.name = name;
        this.code = code;
        this.price = price;
        this.productCount = productCount;
    }

    public ProductCount(){}


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

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Integer getProductCount() {
        return productCount;
    }

    public void setProductCount(Integer productCount) {
        this.productCount = productCount;
    }
}
