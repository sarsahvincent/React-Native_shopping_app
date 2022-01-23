import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Colors from "../../constants/Colors";

import ProductItem from "../../components/shop/ProductItem";
import * as cartActions from "../../store/actions/cart";

const ProductsOverviewScreen = (props) => {
  const products = useSelector((state) => state.products.availableProducts);
  const dispatch = useDispatch();

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <ProductItem
          image={itemData.item.imageUrl}
          title={itemData.item.title}
          price={itemData.item.price}
          onViewDetails={() => {
            props.navigation.navigate("ProductDetails", {
              productId: itemData.item.id,
              productTitle: itemData.item.title,
            });
          }}
          onAddToCart={() => {
            dispatch(cartActions.addToCart(itemData.item));
          }}
        >
          <Button
            color={Colors.primary}
            title="View Details"
            onPress={props.onViewDetails}
          />
          <Button
            color={Colors.primary}
            title="Add To Cart"
            onPress={props.onAddToCart}
          />
        </ProductItem>
      )}
    />
  );
};

export default ProductsOverviewScreen;

const styles = StyleSheet.create({});
