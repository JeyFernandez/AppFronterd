import React from "react";
import {  Text, View } from "react-native";
import Nav from "../components/Home/Nav";
import ListItems from "../components/Detalle/Delle";

const Detalle = () => {
  return (
    <View>
      <Nav />
      <View style={{ marginLeft: 8, marginRight: 8, }}>
        <Text style={{
          fontWeight: 'bold',
          margin: 10,
          fontSize: 22,
        }}>Agregados</Text>
        <ListItems/>
      </View>
    </View>
    
  );
};
export default Detalle;