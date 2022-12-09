import React from "react";
import { StyleSheet, View, Text} from "react-native";
import ListItems from "./Data";
import ClientList from "./Client";

function ListProducts(){
  return (
    <View style={styles.container}>
      <Text>Products</Text>
      <ListItems/>
      <Text>Client</Text>
      <ClientList/>
    </View>
  );
};

export default ListProducts;

const styles = StyleSheet.create({
  container: {
  },
});
