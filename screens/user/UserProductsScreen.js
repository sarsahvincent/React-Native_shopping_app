import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import ProductItem from "../../components/shop/ProductItem";
import { useSelector } from "react-redux";

const UserProductsScreen = () => {
  const userProducts = useSelector((state) => state.products.userProducts);
  return (
    <View>
      <FlatList
        data={userProducts}
        keyExtracto={(item) => item.id}
        renderItem={(itemData) => (
          <ProductItem
            image={itemData.item.imageUrl}
            title={itemData.item.title}
            price={itemData.item.price}
            onViewDetails={() => {}}
            onAddToCart={() => {}}
          />
        )}
      />
    </View>
  );
};

export default UserProductsScreen;

const styles = StyleSheet.create({});
