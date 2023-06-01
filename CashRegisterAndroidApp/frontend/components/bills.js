/** @format */

import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import personBills from "../model/person-bills";
import billsData from "../model/bills";
import products from "../model/products";

const Bills = () => {
  const [totalCost, setTotalCost] = useState(0);
  const productIds = [];

  const personId = 1;
  const billIds = personBills
    .filter((item) => item.personId === personId)
    .map((item) => item.billId);

  const bills = billsData.filter((bill) => billIds.includes(bill.id));

  bills.forEach((bill) => {
    bill.products.forEach((product) => {
      productIds.push(product.productId);
    });
  });

  const filteredProducts = products.filter((product) =>
    productIds.includes(product.id)
  );
  const randomIndex = Math.floor(Math.random() * filteredProducts.length);
  const randomProduct = filteredProducts[randomIndex];

  const randomProductImage = randomProduct.image;
  const calculateTotalCost = (bills) => {
    let total = 0;

    bills.forEach((bill) => {
      bill.products.forEach((product) => {
        total += product.cost;
      });
    });

    setTotalCost(total);
  };
  useEffect(() => {
    calculateTotalCost(bills);
  }, [bills]);

  return (
    <ScrollView style={style.scrollViewContent}>
      <View style={style.billsContainer}>
        {billsData.map((bill) => (
          <View key={bill.id} style={style.billItem}>
            <Image source={randomProductImage} style={style.image} />
            <View style={style.itemContainer}>
              <Text style={style.informationContainer}>nr: {bill.nrOrder}</Text>
              <Text style={style.informationContainer}>{bill.date}</Text>
            </View>
            <View style={style.priceContainer}>
              <Text style={style.totalCost}>$ {totalCost}</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default Bills;

const style = StyleSheet.create({
  billsContainer: {
    flex: 1,
    marginTop: 16,
    width: 314,
    justifyContent: "center",
    alignItems: "center",
  },
  billItem: {
    marginBottom: 16,
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#F1FAEE",
    width: 314,
    borderRadius: 10,
    alignItems: "center",
  },
  image: {
    width: 90,
    height: 72,
  },
  billId: {
    fontWeight: "bold",
    fontSize: 16,
  },
  informationContainer: {
    fontSize: 15,
    color: "#000000",
  },
  priceContainer: {
    alignSelf: "flex-end",
    marginRight: 18,
  },
  itemContainer: {
    flexDirection: "column",
  },
  productsContainer: {
    marginLeft: 16,
    marginTop: 8,
  },
  productItem: {
    marginLeft: 8,
    marginTop: 8,
  },
  totalCost: {
    fontSize: 20,
    color: "#E63946",
  },
  scrollViewContent: {
    marginBottom: 120,
  },
});
