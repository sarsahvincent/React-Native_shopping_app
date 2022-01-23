import React from "react";
import 'react-native-gesture-handler';
import { Provider } from "react-redux";
import Navigation from "./navigation/Navigation";
import store from "./store/store";

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
