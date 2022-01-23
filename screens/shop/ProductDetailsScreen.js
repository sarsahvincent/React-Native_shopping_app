import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ScrollView,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Colors from "../../constants/Colors";
import * as cartActions from "../../store/actions/cart";

const ProductDetailsScreen = ({ route, navigation }) => {
  const ProductId = route.params.productId;
  const seletctedProduct = useSelector((state) =>
    state.products.availableProducts.find((prod) => prod.id === ProductId)
  );

  const dispatch = useDispatch();

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: seletctedProduct.imageUrl }} />
      <View style={styles.actions}>
        <Button
          color={Colors.primary}
          onPress={() => {
            dispatch(cartActions.addToCart(seletctedProduct));
          }}
          title="Add to Cart"
        />
      </View>
      <Text style={styles.price}>${seletctedProduct.price.toFixed(2)}</Text>
      <Text style={styles.description}>{seletctedProduct.description}</Text>
    </ScrollView>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  actions: {
    marginVertical: 10,
    alignItems: "center",
  },
  price: {
    fontSize: 20,
    color: "#888",
    textAlign: "center",
    marginVertical: 20,
  },
  description: {
    fontSize: 18,
    textAlign: "center",
    marginHorizontal: 20,
  },
});
