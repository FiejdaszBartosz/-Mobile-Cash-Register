/** @format */

import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import cartData from "../model/cart";
import productsData from "../model/products";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const ShoppingCart = ({route}) => {
  const { shoppingCart, setShoppingCart} = useState();
  const { receiptId } = route.params;
  console.log("params: " + receiptId);
   
  console.log(userid);
  fetch('https://mobile-cash-register-production.up.railway.app/receipt/' + receiptId, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  })
    .then(response => response.text())
    .then(data => {
      console.log(data);
      setShoppingCart(data);
    })
    .catch(error => {
      console.error(error);
    });


  if (!cart) {
    return (
      <View style={style.noCart}>
        <Text style={style.noCartText}>
          The cart with the given id doesn't exist
        </Text>
      </View>
    );
  }

  return (
    <ScrollView style={style.scrollViewContent}>
      <View style={style.mainContainer}>
        {shoppingCart.map((product, index) => {
          return (
            <View key={product.id}>
              <View style={style.productContainer}>
                {/* <Image
                  source={productData.image}
                  style={style.imageContainer}
                /> */}
                <View style={style.productInformationContainer}>
                  <Text style={style.productName}>{product.name}</Text>
                  <Text style={style.productQuantity}>
                    Quantity: {product.productCount}
                  </Text>
                  <Text style={style.productPrice}>$ {product.price}</Text>
                </View>
                <TouchableOpacity style={style.trashButton}>
                  <FontAwesome5 name={"trash"} style={style.trash} />
                </TouchableOpacity>
              </View>
              {index !== cart.products.length - 1 && (
                <View style={style.line}></View>
              )}
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default ShoppingCart;

const style = StyleSheet.create({
  noCart: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  noCartText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000",
  },
  scrollViewContent: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#F1FAEE",
    borderRadius: 20,
  },
  productContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 341,
    height: 80,
    marginBottom: 10,
  },
  imageContainer: {
    width: 65,
    height: 65,
    marginLeft: 10,
  },
  productInformationContainer: {
    flex: 1,
    marginLeft: 10,
  },
  trashButton: {
    padding: 10,
    marginRight: 10,
  },
  trash: {
    color: "#457B9D",
    fontSize: 13,
  },
  line: {
    width: 341,
    height: 1,
    backgroundColor: "#A8DADC",
  },
  productName: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 13,
    color: "#E63946",
    marginBottom: 5,
    alignSelf: "flex-end",
    justifyContent: "center",
    marginRight: 15,
  },
  productQuantity: {
    fontSize: 12,
  },
});
