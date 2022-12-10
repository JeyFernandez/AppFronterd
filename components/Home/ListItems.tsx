import React from "react";
import { StyleSheet, View, Text, ScrollView, ScrollViewBase } from 'react-native';
import Products from "./Data";
import CategoryList from "../Category";
import ClientList from "./Client";
const ListItems = () => {
  return (
    <ScrollView>
       <View style={styles.container}>
      <Text style={styles.title}>Productos</Text>
      <Products />
      <Text style={styles.title}>Categorias</Text>
      <CategoryList />
      <Text style={styles.title}>Clientes</Text>
      <ClientList />
    </View>
    </ScrollView>
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
  title:{
    fontSize:25,
    padding:12  ,
    fontWeight:"bold",
  },
});
