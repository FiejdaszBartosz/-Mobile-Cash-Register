/** @format */

import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Image,
  useRoute,
} from "react-native";
import Logo from "../components/logo";
import GoBack from "../components/go-back";
import Caption from "../components/caption";
import OptionsBar from "../components/options-bar";
import BillsData from "../model/bills";
import ProductsData from "../model/products";

const OrderDetailPage = ({ route }) => {
  const [totalCost, setTotalCost] = useState(0);
  const { billId } = route.params;

  const bill = BillsData.find((bill) => bill.id === billId);
  let cost = 0;
  bill.products.forEach((product) => {
    cost += product.cost;
  });
  useEffect(() => {
    setTotalCost(cost);
  }, []);

  const products = bill.products.map((product) => {
    const productInfo = ProductsData.find(
      (item) => item.id === product.productId
    );
    return {
      ...productInfo,
      quantity: product.quantity,
    };
  });
  return (
    <SafeAreaView style={style.container}>
      <View style={style.mainContainer}>
        <Logo />
        <View style={style.goBackContainer}>
          <GoBack />
        </View>
        <Caption caption={"Order details"} />
        <View style={style.orderDeatailsContainer}>
          <View style={style.rowContainer}>
            <View style={style.columnStartContainer}>
              <Text style={style.label}>Nr order</Text>
              <Text style={style.text}>{bill.nrOrder}</Text>
            </View>
            <View style={style.columnEndContainer}>
              <Text style={style.label}>Date</Text>
              <Text style={style.text}>{bill.date}</Text>
            </View>
          </View>
          <View style={style.rowContainer}>
            <View style={style.columnStartContainer}>
              <Text style={style.label}>Amount of products</Text>
              <Text style={style.text}>{bill.products.length}</Text>
            </View>
            <View style={style.columnEndContainer}>
              <Text style={style.label}>Cost</Text>
              <Text style={style.text}>$ {totalCost}</Text>
            </View>
          </View>
        </View>
        <View style={style.productsCaption}>
          <Text style={style.productCaptionText}>Products</Text>
        </View>
        <ScrollView style={style.scrollViewContent}>
          <View
            style={{
              flexDirection: "row",
              width: 369,
              backgroundColor: "#F1FAEE",
              borderRadius: 10,
              padding: 10,
            }}
          >
            <View style={{}}>
              {products.map((product, index) => (
                <View key={index} style={style.productContainer}>
                  <Image source={product.image} style={style.productImage} />
                  <View
                    style={{
                      flexDirection: "column",
                      alignItems: "flex-start",
                    }}
                  >
                    <Text style={style.productName}>{product.name}</Text>
                    <Text style={style.productQuantity}>
                      Quantity: {product.quantity}
                    </Text>
                    <Text style={style.productPrice}>$ {product.price}</Text>
                  </View>
                </View>
              ))}
            </View>
          </View>
        </ScrollView>
        <OptionsBar />
      </View>
    </SafeAreaView>
  );
};

export default OrderDetailPage;

const style = {
  container: {
    flex: 1,
    backgroundColor: "#A8DADC",
    alignContent: "center",
    justifyContent: "center",
    marginTop: StatusBar.currentHeight || 0,
  },
  mainContainer: {
    flex: 1,
    alignItems: "center",
  },
  goBackContainer: {
    alignSelf: "flex-start",
    marginTop: 16,
    marginLeft: 16,
  },
  label: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 4,
  },
  text: {
    fontSize: 12,
  },
  orderDeatailsContainer: {
    width: 361,
    backgroundColor: "#F1FAEE",
    padding: 10,
    borderRadius: 10,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 8,
  },
  columnStartContainer: {
    width: 130,
    flexDirection: "column",
    alignSelf: "flex-start",
  },
  columnEndContainer: {
    width: 150,
    flexDirection: "column",
    alignItems: "flex-end",
  },
  productsCaption: {
    alignItems: "flex-start",
    width: "80%",
  },
  productCaptionText: {
    fontSize: 24,
    fontWeight: "normal",
    marginBottom: 4,
    color: "#1D3557",
  },
  productContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    width: "80%",
  },
  productImage: {
    width: 91,
    height: 65,
    marginRight: 8,
  },
  productName: {
    fontSize: 12,
  },
  productQuantity: {
    fontSize: 11,
  },
  productPrice: {
    fontSize: 12,
    color: "#E63946",
  },
  scrollViewContent: {
    marginBottom: 100,
  },
};
