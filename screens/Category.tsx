import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Nav from "../components/Home/Nav";
import CategoryList from "../components/categories/Category";
import { Text, ScrollView } from 'react-native';
const Categories = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <ScrollView>
      <Nav/>
      <Text>Categorias</Text>
      <CategoryList/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Categories;
