import React from "react";
import {StyleSheet, View} from "react-native";
import Products from "./Data";
import CategoryList from "../Category";
const ListItems = () => {
  return (
    <View style={styles.container}>
      <CategoryList/>
      <Products/>
    </View>
  );
};

export default ListItems;

const styles = StyleSheet.create({
  container: {
    shadowColor: "#000",
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    borderRadius: 15,
    marginTop: 15,
    padding: 10,
    backgroundColor: '#E7FFFF',
    flex: 1,
  },
});
