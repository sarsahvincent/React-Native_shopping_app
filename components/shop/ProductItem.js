import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  TouchableHighlight
} from "react-native";
import Colors from "../../constants/Colors";

const ProductItem = (props) => {
  return (
    <TouchableHighlight    underlayColor="none"  TouchableOpacity={0.9} onPress={props.onViewDetails}>

      <View style={styles.product}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: props.image }} />
        </View>

        <View style={styles.detail}>
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.price}>$ {props.price.toFixed(2)}</Text>
        </View>
        <View style={styles.actions}>
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
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  product: {
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
    height: 300,
    margin: 20,
  },
  imageContainer: {
    width: "100%",
    height: "60%",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  detail: {
    alignItems: "center",
    height: "15%",
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 2,
  
  },

  price: {
    fontSize: 14,
    color: "#888",
   
  },

  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
});
