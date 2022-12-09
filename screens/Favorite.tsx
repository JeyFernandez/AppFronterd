import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Nav from "../components/Home/Nav";
import FavoriteListItems from "../components/Favorite/Favorites"; 
const Favorite = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <Nav/>
      <FavoriteListItems/>
    </SafeAreaView>
  );
};

export default Favorite;
