import React from "react";
import { StyleSheet, View, Text} from "react-native";
import ListItems from "./Data";

function ListProducts(){
  return (
    <View style={styles.container}>
      <Text>Products</Text>
      <ListItems/>
    </View>
  );
};

export default ListProducts;

const styles = StyleSheet.create({
  container: {
  },
});
