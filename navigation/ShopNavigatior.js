import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ProductsOverviewScreen from "../screens/shop/ProductsOverviewScreen";
import CartScreen from "../screens/shop/CartScreen";
import ProductDetailsScreen from "../screens/shop/ProductDetailsScreen";
import OdersScreen from "../screens/shop/OdersScreen";
import UserProductsScreen from "../screens/user/UserProductsScreen";
import { Platform, Button, Text } from "react-native";
import Colors from "../constants/Colors";
import HeaderButton from "../components/UI/HeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const adminNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: Platform.OS === "android" ? Colors.primary : "",
        },
        headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
      }}
    >
      <Stack.Screen name="UserProducts" component={UserProductsScreen} />
    </Stack.Navigator>
  );
};

const ProductNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === "android" ? Colors.primary : "",
        },
        headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
      }}
    >
      <Stack.Screen
        name="Products"
        options={({ navigation }) => ({
          title: "All Products",
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                title="Menu"
                iconName={Platform.OS === "android" ? "md-menu" : "ios-menu"}
                onPress={() => navigation.toggleDrawer()}
              />
            </HeaderButtons>
          ),
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                title="Cart"
                iconName={Platform.OS === "android" ? "md-cart" : "ios-cart"}
                onPress={() => navigation.navigate("Cart")}
              />
            </HeaderButtons>
          ),
        })}
        component={ProductsOverviewScreen}
      />
      <Stack.Screen
        name="ProductDetails"
        options={({ route, navigation }) => ({
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                title="Cart"
                iconName={Platform.OS === "android" ? "md-cart" : "ios-cart"}
                onPress={() => navigation.navigate("Cart")}
              />
            </HeaderButtons>
          ),
          title: route.params.productTitle,
        })}
        component={ProductDetailsScreen}
      />
      <Stack.Screen name="Cart" component={CartScreen} />
    </Stack.Navigator>
  );
};

const OdersNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={({ navigation }) => ({
          headerShown: false,
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                title="Menu"
                iconName={Platform.OS === "android" ? "md-menu" : "ios-menu"}
                onPress={() => navigation.toggleDrawer()}
              />
            </HeaderButtons>
          ),
        })}
        name="Oder"
        component={OdersScreen}
      />
      <Stack.Screen name="Default" component={ProductNavigator} />
    </Stack.Navigator>
  );
};

function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === "android" ? Colors.primary : "",
        },
        headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
      }}
      initialRouteName="Product"
    >
      <Drawer.Screen
        name="Product"
        options={({ navigation }) => ({
          drawerIcon: {},
          title: "All Products",
          headerShown: false,
          drawerIcon: ({ focused, size }) => (
            <Ionicons
              name={Platform.OS === "android" ? "md-list" : "ios-list"}
              size={size}
              color={focused ? Colors.primary : "black"}
            />
          ),
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                title="Cart"
                iconName={Platform.OS === "android" ? "md-cart" : "ios-cart"}
                onPress={() => navigation.navigate("Cart")}
              />
            </HeaderButtons>
          ),
        })}
        component={ProductNavigator}
      />
      <Drawer.Screen
        name="Oders"
        options={{
          title: "Your Orders",
          drawerIcon: ({ focused, size }) => (
            <Ionicons
              name={Platform.OS === "android" ? "md-cart" : "ios-cart"}
              size={size}
              color={focused ? Colors.primary : "black"}
            />
          ),
        }}
        component={OdersNavigator}
      />

      <Drawer.Screen
        name="userProduct"
        component={adminNavigator}
        options={{
          title: "Your Products",
          drawerIcon: ({ focused, size }) => (
            <Ionicons
              name={Platform.OS === "android" ? "md-create" : "ios-create"}
              size={size}
              color={focused ? Colors.primary : "black"}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default MyDrawer;
