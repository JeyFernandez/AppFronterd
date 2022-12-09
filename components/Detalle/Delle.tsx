import React from "react";
import { StyleSheet, View, Text} from "react-native";
import CategoryList from "../Category";
import ListItems from "./Data";

function ListProducts(){
  return (
    <View style={styles.container}>
      <Text>Products</Text>
      <ListItems/>
      <Text>Category</Text>
      <CategoryList/>
    </View>
  );
};

export default ListProducts;

const styles = StyleSheet.create({
  container: {
  },
});
