import React from "react";
import {  Text, View, ScrollView } from "react-native";
import Nav from "../components/Home/Nav";
import ListProducts from "../components/Detalle/Delle";

const Detalle = () => {
  return (
    <ScrollView>
      <Nav />
      <View style={{ marginLeft: 8, marginRight: 8, }}>
        <Text style={{
          fontWeight: 'bold',
          margin: 10,
          fontSize: 22,
        }}>Agregados</Text>
        <ListProducts/>
      </View>
    </ScrollView>
    
  );
};
export default Detalle;