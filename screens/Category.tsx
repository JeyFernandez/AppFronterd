import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Nav from "../components/Home/Nav";
import CategoryList from "../components/categories/Category";
import { Text } from "react-native";
const Categories = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <Nav/>
      <Text>Categorias</Text>
      <CategoryList/>
    </SafeAreaView>
  );
};

export default Categories;
